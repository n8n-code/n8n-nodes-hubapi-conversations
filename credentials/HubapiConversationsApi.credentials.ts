import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class HubapiConversationsApi implements ICredentialType {
        name = 'N8nDevHubapiConversationsApi';

        displayName = 'Hubapi Conversations API';

        icon: Icon = { light: 'file:../nodes/HubapiConversations/hubapi-conversations.png', dark: 'file:../nodes/HubapiConversations/hubapi-conversations.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.hubapi.com/',
                        required: true,
                        placeholder: 'https://api.hubapi.com/',
                        description: 'The base URL of your Hubapi Conversations API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'hapikey': '={{$credentials.apiKey}}',
                        },
                },
        };


}
