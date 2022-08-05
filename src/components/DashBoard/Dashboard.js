import React from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <div className='dashboard'>
            <h1 className='m-10 text-3xl font-bold text-rose-800'>Investment Per Year</h1>
            <BarChart className='m-10 mt-20 mb-20' width={730} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="month" fill="#82ca9d" />
            </BarChart>
            <LineChart className='m-10' width={730} height={250} data={data}>
                <Line dataKey={'sell'}></Line>
                <Line dataKey={'revenue'}></Line>

                <YAxis dataKey={'sell'}></YAxis>
                <XAxis dataKey={'revenue'}></XAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>





    );
};

export default Dashboard;