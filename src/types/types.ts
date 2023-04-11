export type DataDepartments = {
    id: number,
    name: string
}

export type DataConnection = {
    connectionStateId: number,
    name: string
}

export type DataBrigades = {
    id: number,
    brigade_name: string,
    connectionStateId: number,
    department: {
        id: number
    },
    position: {
        field: string,
        cluster: number,
        well: number
    }
}

export type SelectItem = {
    value: string,
    label: string
}



export type BrigadesProcessed = {
    id: number,
    brigade_name: string,
    connection: number,
    department: number,
    position: {
        field: string,
        cluster: number,
        well: number
    }
}

export type DepartmentsProcessed = {
    value: string,
    label: string
}

export type ConnectionProcessed = {
    value: string,
    label: string
}

export type ActiveSelect = {
    department: string
    connection: string
}