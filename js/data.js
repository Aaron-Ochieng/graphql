const URL = 'https://learn.zone01kisumu.ke/api/graphql-engine/v1/graphql';
import { AUTH_TOKEN } from "./auth/auth.js";
import { content_ui } from "./auth/ui.js";
import { graphql_query } from "./query.js";

export default class Data {
    constructor() {
        this.authToken = localStorage.getItem(AUTH_TOKEN);
        // Inject UI
        this.addUI();
        this.changeUI();
    }
    
    async fetchData() {
        const res = await fetch(URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.authToken}`,
            },
            body: JSON.stringify({ query: graphql_query })
        });

        const result = await res.json()
        return result['data']
    }

    addUI(){
        document.getElementById('content').innerHTML = content_ui;
    }

    async changeUI(){
        const queryData =await  this.fetchData();
        queryData['user'].forEach(element => {

            // User Details;
            document.querySelector('.icon').textContent = 'A'
            document.querySelector('.username').textContent=element['firstName'] + ' ' + element['lastName']
            document.querySelector('.login').textContent=element['login']
            document.querySelector('.mail').textContent=element['email']
            document.querySelector('.campus').textContent=element['campus'] 
        });
    }
}
