import express from 'express';


const router = express.Router();

const ISS_SERVICE_URL = "http://api.open-notify.org/iss-now.json"

interface IssData {
    message: string
    timestamp: number
    iss_position: {
        latitude: string,
        longitude: string
    }
}

interface Response {
    message: string
    timestamp: number
    position: {
        latitude: string,
        longitude: string
    },
    height: number,
    velocity: number,
    period: number,
}

router.get<{}, Response>('/iss', async (req, res, next) => {
    try {
        const issInfo: IssData = await fetch(ISS_SERVICE_URL).then(response => {
            return response.json()
        })

        const response = {
            message: issInfo.message,
            timestamp: new Date().getTime(),
            position: issInfo.iss_position,
            height: 420,
            velocity: 28165,
            period: 92.9,
        }

        res.json(response);
    } catch (e) {
        next(e)
    }
});

export default router;
