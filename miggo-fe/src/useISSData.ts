import {useCallback, useEffect, useState} from "react";
import {IssData} from "./interfaces";

// Should be configured in .env variables
const SERVICE_URL = 'http://localhost:8080/api/v1/iss'
const FETCH_INTERVAL = 10 * 1000

export const useISSData = () => {
    const [data, setData] = useState<IssData | null>(null)

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch(SERVICE_URL)
            const issInfo = await res.json()
            setData(issInfo)
        } catch (e) {
            // TODO implement error handling
            console.error(e)
        }
    }, [])

    useEffect(() => {
        fetchData()

        const interval = setInterval(() => {
            fetchData()
        }, FETCH_INTERVAL)

        return () => {
            clearInterval(interval)
        }
    }, [fetchData])

    return { data, fetchData }
}