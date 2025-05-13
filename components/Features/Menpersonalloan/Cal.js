import React from 'react'
import { Link } from "react-router-dom";
import Highcharts from "highcharts";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Cal() {

    const [loanAmt, setloanAmt] = useState(100000);
    const [loanMonth, setloanMonth] = useState(12);
    const [interestRate, setinterestRate] = useState(10);
    const [emiVal, setEmival] = useState(0);
    const [intVal, setIntVal] = useState(5499.06);
    const [TotalVal, setTotalVal] = useState(0);
    const charts = useRef();

    const chart_render = () => {
        Highcharts.chart(charts.current, options);
    };

    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
        },
        title: {
            text: "",
            align: "center",
            verticalAlign: "middle",
            y: 40,
        },
        colors: ["#e63a27", "#1c1c27"],
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: "bold",
                        color: "white",
                    },
                },
                startAngle: -90,
                endAngle: 90,
                center: ["50%", "120%"],
                size: "230%",
            },
        },
        series: [
            {
                type: "pie",
                name: "",
                innerSize: "50%",
                data: [
                    ["Principal value", parseInt(loanAmt)],
                    ["Interest Value", intVal],
                    {
                        dataLabels: {
                            enabled: true,
                        },
                    },
                ],
            },
        ],
    };

    useEffect(() => {
        if (loanAmt > 0 && loanMonth > 0 && interestRate > 0) {
            emiCalculate();
            chart_render();
        }
    }, [loanAmt, loanMonth, interestRate]);

    const emiCalculate = () => {
        const monthlyInterestRatio = interestRate / 100 / 12;
        const top = Math.pow(1 + monthlyInterestRatio, loanMonth);
        const bottom = top - 1;
        const sp = top / bottom;
        const emi = loanAmt * monthlyInterestRatio * sp;
        const emi_str = emi
            .toFixed(2)
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        const full = loanMonth * emi;
        const interest = full - loanAmt;
        const int_str = interest
            .toFixed(2)
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const full_str = full
            .toFixed(2)
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        const new_intVal = parseFloat(int_str.replace(/,/g, ""));

        setEmival(emi_str);
        setIntVal(new_intVal);
        setTotalVal(full_str);
    };


    return (
        <>
            <section className="loan-Calculator pt-120 pb-120">
                <div className="container">
                    <div className="loan-calculator__box" id="personal-loan-calculator">
                        <div className="row">
                            <div className="col-xl-7 col-lg-12">
                                <div className="slider-box">
                                    <form action="#">
                                        <div className="main-heading block-title text-left">
                                            <p className="block-title__tagline mb-0">Monthly EMI</p>
                                            <h3 className="block-title__title w-500">
                                                Loan Interest Calculator
                                            </h3>
                                        </div>
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Loan Amount</h4>
                                                <input
                                                    type="text"
                                                    name="pricipal"
                                                    className="form-control input-control"
                                                    id="principal-input"
                                                    value={loanAmt || ""}
                                                    onChange={(e) => {
                                                        setloanAmt(e.target.value);
                                                        emiCalculate();
                                                    }}
                                                />
                                            </div>
                                            <div className="w-100">
                                                <input
                                                    style={{ maxWidth: "100%" }}
                                                    className="w-100 slider"
                                                    type="range"
                                                    id="volume"
                                                    min="10000"
                                                    max="500000"
                                                    onChange={(e) => {
                                                        setloanAmt(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>

                                            <div className="loan-counter-value">
                                                <span>$</span>
                                                <h6 id="principal-show">{loanAmt}</h6>
                                            </div>
                                        </div>
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Loan Months</h4>
                                                <input
                                                    type="text"
                                                    name="loan-year"
                                                    className="form-control input-control"
                                                    id="loan-year-input"
                                                    value={loanMonth || ""}
                                                    onChange={(e) => setloanMonth(e.target.value)}
                                                />
                                            </div>
                                            <div className="w-100">
                                                <input
                                                    style={{ maxWidth: "100%" }}
                                                    className="w-100 slider"
                                                    type="range"
                                                    id="volume"
                                                    min="1"
                                                    max="24"
                                                    value={loanMonth}
                                                    onChange={(e) => {
                                                        setloanMonth(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>

                                            <div className="loan-counter-value">
                                                <h6 id="totalyear-show">{loanMonth}</h6>
                                                <span>Months</span>
                                            </div>
                                        </div>
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Interest Rate</h4>
                                                <input
                                                    type="text"
                                                    name="interest-rate"
                                                    className="form-control input-control"
                                                    id="interest-rate-input"
                                                    value={interestRate || ""}
                                                    onChange={(e) => setinterestRate(e.target.value)}
                                                />
                                            </div>
                                            <div className="w-100">
                                                <input
                                                    style={{ maxWidth: "100%" }}
                                                    className="w-100 slider"
                                                    type="range"
                                                    id="volume"
                                                    min="1"
                                                    max="24"
                                                    value={interestRate}
                                                    onChange={(e) => {
                                                        setinterestRate(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>

                                            <div className="loan-counter-value">
                                                <h6 id="intrest">{interestRate}</h6>
                                                <span>%</span>
                                            </div>
                                        </div>
                                        <div className="note">
                                            <p>
                                                <strong>Note: </strong>
                                                <small>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Quam quisque id diam vel quam
                                                    elementum. Amet mattis vulputate enim nulla aliquet
                                                    porttitor.
                                                </small>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="emi-calculation">
                                    <div className="emi-calculation-content">
                                        <p>
                                            <span>Monthly EMI</span>
                                            <b>
                                                $<i id="monthly-emi">{emiVal}</i>
                                            </b>
                                        </p>
                                    </div>
                                </div>
                                <div className="loan-calculation">
                                    <div
                                        id="loan-chart"
                                        ref={charts}
                                        data-highcharts-chart="7"
                                    ></div>

                                    <div className="loan-calculation-content total-loan-form">
                                        <div className="total-loan-form-calculation">
                                            <p>
                                                <span>Total Interest</span>
                                                <b>
                                                    $<i id="total-interest">{intVal}</i>
                                                </b>
                                            </p>
                                            <p>
                                                <span>Total Amount Payable</span>
                                                <b>
                                                    $<i id="total-amount">{TotalVal}</i>
                                                </b>
                                            </p>
                                            <Link
                                                to="/applynow"
                                                className="thm-btn"
                                                target="_blank"
                                                rel="nofollow"
                                            >
                                                Apply For Loan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cal