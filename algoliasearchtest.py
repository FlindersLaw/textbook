from algoliasearch.search_client import SearchClient

api_keys = {
    'search'     : '7b718c003082c441d9c635ddd2027344',
    'write'      : '6bca6bbe48cda67bf8012db5f2e8fc9c',
    'analytics'  : '8e3d2afa89f27ef6b7a836f9162fcfa2',
    'usage'      : 'b4142c4629d4c6583df7a5510a521b38',
    'monitoring' : '12a911b626d59db856c35ca6b94d11bb',
    'working'    : '62783a1bb20ada3fd86e34175888e5c5'
}

search_indices = {
    'happy' : 'happy-sea-0fbd5ba00-3-azurestaticapps',
    'ult'   : 'Understanding Legal Technology'
}

app_id = 'E707TIU8AU'


# List API Keys
for key in api_keys.keys():
    print("\n")
    client = SearchClient.create(app_id=app_id, api_key=api_keys[key])
    
    # List API Keys
    try:
        print("List API keys for key: {}".format(key))
        client.list_api_keys()
    except Exception as e:
        print("ERROR: List API Keys: Key: {} failed".format(key))
        print("Error: {}".format(e))
        
    # Searching
    for index in search_indices:
        try:
            theindex = client.init_index(search_indices[index])
            res = theindex.search('docassemble')
            
            print("Search results for key: {} index: {} - {} hits".format(key, index, len(res['hits'])))
        except Exception as e:
            print("ERROR: Search: Key: {} Index: {}".format(key, index))
            print("Error: {}".format(e))
                  
        
        