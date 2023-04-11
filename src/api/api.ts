import axios, {AxiosResponse} from "axios";
import {DataBrigades, DataConnection, DataDepartments} from "../types/types";

const instanse = axios.create({
    baseURL : 'https://v1336-api-test.onrender.com/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

export let brigadesAPI = {
    getDepartments() {
        return instanse.get<DataDepartments[]>(`getDepartments`)
            .then((response) => response.data)
    },
    getConnectionState() {
        return instanse.get<DataConnection[]>(`getConnectionState`)
            .then(response => response.data)
    },
    getBrigades() {
        return instanse.get<DataBrigades[]>(`getBrigadesData`)
            .then((response) => response.data)
    }
}