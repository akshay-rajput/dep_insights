import { createClient, Interceptor } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-node';
import { InsightService } from '@buf/safedep_api.connectrpc_es/safedep/services/insights/v2/insights_connect.js';
import { Ecosystem } from '@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/ecosystem_pb.js';
// Define an interceptor to add the API key and tenant id to each request
function authenticationInterceptor(token: string, tenant: string): Interceptor {
	return (next) => async (req) => {
		req.header.set('authorization', token);
		req.header.set('x-tenant-id', tenant);
		return await next(req);
	};
}

export async function fetchPackageInsight() {
	// Read the API key and tenant id from environment variables
	const token = process.env.SAFEDEP_API_KEY;
	const tenantId = process.env.SAFEDEP_TENANT_ID;

	console.log({ token });
	console.log({ tenantId });

	if (!token || !tenantId) {
		throw new Error(
			'API key and tenant ID must be set in environment variables.'
		);
	}

	try {
		// Create a transport with the base URL for the SafeDep API
		const transport = createConnectTransport({
			baseUrl: 'https://api.safedep.io',
			httpVersion: '1.1',
			interceptors: [authenticationInterceptor(token, tenantId)],
		});

		// Create the promise-based client for the InsightService
		const client = createClient(InsightService, transport);

		// Call the API to get package insights (adjust package/version as needed)
		const res = await client.getPackageVersionInsight({
			packageVersion: {
				package: {
					ecosystem: Ecosystem.NPM,
					name: 'lodash',
				},
				version: '4.17.21',
			},
		});

		return res;
	} catch (e) {
		console.warn('Error during fetchPackageInsights: ', e);
		throw new Error('There was a problem fetching package insights.');
	}
}