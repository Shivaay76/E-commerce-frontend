export async function apiConnector( url, method = 'GET', postData = null, token = null){

    
    try {
        const options = {
            method : method,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }

        if ( postData !== null ) {
            options.body = JSON.stringify(postData);
        }
        
        const response = await fetch(url, options);


        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;

    } catch (error) {
        console.log('I am write inside apiConnector function : Error :', error);
        throw new Error( error.message );
    }    
};