import {useCallback, useEffect, useState} from "react";
import {IssData} from "./interfaces";

// Should be configured in .env variables
const SERVICE_URL = 'http://localhost:8080/api/v1/iss'
const FETCH_INTERVAL = 10 * 1000

export const useISSData = () => {
    const [current, setCurrent] = useState<IssData | null>(null)
    const [positions, setPositions] = useState<[number, number][]>([])

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch(SERVICE_URL)
            if (!res.ok) {
                return new Error(`HTTP Error: ${res.status} - ${res.statusText}`);
            }
            const issInfo = await res.json()
            setCurrent(issInfo)
            setPositions((state) => [...state, [Number(issInfo.position.latitude), Number(issInfo.position.longitude)]])
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

    return {current, positions, fetchData}
}