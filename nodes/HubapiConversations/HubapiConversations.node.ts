import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { generateDescription } from './resources/generate';

export class HubapiConversations implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Hubapi Conversations',
		name: 'N8nDevHubapiConversations',
		icon: { light: 'file:./hubapi-conversations.png', dark: 'file:./hubapi-conversations.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Identify unknown visitors via your authentication system using the Visitor Identification API.',
		defaults: { name: 'Hubapi Conversations' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevHubapiConversationsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Generate",
					"value": "Generate",
					"description": "Operations to generate a token"
				}
			],
			"default": ""
		},
		...generateDescription
		],
	};
}
