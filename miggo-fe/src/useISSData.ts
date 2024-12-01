import {useCallback, useEffect, useMemo, useState} from "react";
import {IssData} from "./interfaces";

// Should be configured in .env variables
const SERVICE_URL = 'http://localhost:8080/api/v1/iss'
const FETCH_INTERVAL = 10 * 1000

export const useISSData = () => {
    const [data, setData] = useState<IssData[]>([])

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch(SERVICE_URL)
            if (!res.ok) {
                return new Error(`HTTP Error: ${res.status} - ${res.statusText}`);
            }
            const issInfo = await res.json()
            setData((state) => [...state, issInfo])
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

    const current = data[data.length - 1]
    let currentPosition: [number, number] | undefined
    let retrospectiveData: [number, number][] | undefined
    if (current) {
        currentPosition = [Number(current.position.latitude), Number(current.position.longitude)]
        retrospectiveData = data.map((item) => {
            return [Number(item.position.latitude), Number(item.position.longitude)]
        })
    }

    return {current, currentPosition, retrospectiveData, fetchData}
}