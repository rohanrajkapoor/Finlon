import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function First() {

    const [loanAmount, setLoanAmount] = useState(30000);
    const [numberOfyears, setNumberOfyear] = useState(10);
    const [rateOfInterest, setRateOfInterest] = useState(8);

    const [monthlyemi, setMonthlyemi] = useState(0);
    const [totalinterest, setTotalinterest] = useState(0);
    const [totalamount, setTotalamount] = useState(0);
    const [emiprincipalinput, setEmiprincipalinput] = useState(0);

    useEffect(() => {
        if (loanAmount > 0 && numberOfyears > 0 && rateOfInterest > 0) {
            emiHome();
        }
    }, [loanAmount, numberOfyears, rateOfInterest]);

    const emiHome = () => {
        const numberOfMonths = numberOfyears * 12;
        const monthlyInterestRatio = rateOfInterest / 100 / 12;
        const top = Math.pow(1 + monthlyInterestRatio, numberOfMonths);
        const bottom = top - 1;
        const sp = top / bottom;
        const emi = loanAmount * monthlyInterestRatio * sp * 10;

        const full = numberOfMonths * emi;
        const interest = full - loanAmount;
        const int_pge = (interest / full) * 100;
        // int_pge.toFixed(2) + " %";
        // 100 - int_pge.toFixed(2) + " %";

        const emi_str = emi
            .toFixed(2)
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const loanAmount_str = loanAmount
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const full_str = full
            .toFixed(2)
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const int_str = interest
            .toFixed(2)
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const input_principal = "emi-principal-input"
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        setMonthlyemi(emi_str);
        setTotalinterest(int_str);
        setTotalamount(full_str);
        setEmiprincipalinput(input_principal);
    };

    const data = [
        {
            id: 1,
            months: 2022,
            Principal: 4953,
            InterestPaid: 5967,
            TotalPayment: 10920,
            Balance: 890117,
        },
        {
            id: 2,
            months: 2023,
            Principal: 20827,
            InterestPaid: 22851,
            TotalPayment: 43680,
            Balance: 3406876,
        },
        {
            id: 3,
            months: 2024,
            Principal: 2255,
            InterestPaid: 21122,
            TotalPayment: 43680,
            Balance: 3145826,
        },
        {
            id: 4,
            months: 2025,
            Principal: 24427,
            InterestPaid: 19251,
            TotalPayment: 43680,
            Balance: 2863141,
        },
        {
            id: 5,
            months: 2026,
            Principal: 26455,
            InterestPaid: 17223,
            TotalPayment: 43680,
            Balance: 2556994,
        },
        {
            id: 6,
            months: 2027,
            Principal: 28651,
            InterestPaid: 15028,
            TotalPayment: 43680,
            Balance: 2225435,
        },
        {
            id: 7,
            months: 2028,
            Principal: 31028,
            InterestPaid: 12648,
            TotalPayment: 43680,
            Balance: 1866359,
        },
        {
            id: 8,
            months: 2029,
            Principal: 31028,
            InterestPaid: 12648,
            TotalPayment: 43680,
            Balance: 1866359,
        },
        {
            id: 9,
            months: 2030,
            Principal: 33603,
            InterestPaid: 10074,
            TotalPayment: 43680,
            Balance: 1477479,
        },
        {
            id: 10,
            months: 2031,
            Principal: 36393,
            InterestPaid: 7286,
            TotalPayment: 43680,
            Balance: 1056322,
        },
        {
            id: 11,
            months: 2032,
            Principal: 39416,
            InterestPaid: 4264,
            TotalPayment: 43680,
            Balance: 600210,
        },
    ];

    return (
        <>
            <section className="loan-Calculator pt-120 pb-120">
                <div className="container">
                    <div className="loan-calculator__box" id="home-loan-calculator">
                        <div className="loan-calculator__top">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="block-title text-left">
                                        <p className="block-title__tagline">calculate your rate</p>
                                        <h2 className="block-title__title">
                                            How much do you need loan for you?
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p className="loan-calculator__top__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Quam elementum pulvinar etiam non quam lacus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-7 col-lg-12">
                                <div className="slider-box">
                                    <form action="#">
                                        <div className="main-heading block-title text-left">
                                            <p className="block-title__tagline mb-0">Monthly EMI</p>
                                            <h3 className="block-title__title w-500">
                                                Home Loan EMI Calculator
                                            </h3>
                                        </div>
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Loan Amount</h4>
                                                <input
                                                    className="form-control input-control"
                                                    type="text"
                                                    name="pricipal"
                                                    id="emi-principal-input"
                                                    onkeypress="return onlynumeric(event)"
                                                    value={loanAmount}
                                                    onChange={(e) => { setLoanAmount(e.target.value); }} />
                                            </div>
                                            <div className="w-100">
                                                <input
                                                    style={{ maxWidth: "100%" }}
                                                    className="w-100 slider"
                                                    type="range"
                                                    id="volume"
                                                    min="1000"
                                                    max="50000"
                                                    value={loanAmount}
                                                    onChange={(e) => {
                                                        setLoanAmount(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>

                                            <div className="loan-counter-value">
                                                <span>$</span>
                                                <h6 id="emi-principal-show">{loanAmount}</h6>
                                            </div>
                                        </div>
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Loan Years</h4>
                                                <input
                                                    className="form-control input-control"
                                                    type="text"
                                                    name="loan-year"
                                                    id="emi-year-input"
                                                    onkeypress="return onlynumeric(event)"
                                                    value={numberOfyears}
                                                    onChange={(e) => {
                                                        setNumberOfyear(e.target.value);
                                                    }}
                                                />
                                            </div>
                                            <div className="w-100 ">
                                                <input
                                                    style={{ maxWidth: "100%" }}
                                                    className="w-100 slider"
                                                    type="range"
                                                    id="volume"
                                                    min="1"
                                                    max="24"
                                                    value={numberOfyears}
                                                    onChange={(e) => {
                                                        setNumberOfyear(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>

                                            <div className="loan-counter-value">
                                                <h6 id="emi-totalyear-show">{numberOfyears}</h6>
                                                <span>Years</span>
                                            </div>
                                        </div>
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Interest Rate</h4>
                                                <input
                                                    className="form-control input-control"
                                                    type="text"
                                                    name="interest-rate"
                                                    id="interest-rate-input"
                                                    onkeypress="return onlynumeric(event)"
                                                    value={rateOfInterest}
                                                    onChange={(e) => {
                                                        setRateOfInterest(e.target.value);
                                                    }}
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
                                                    value={rateOfInterest}
                                                    onChange={(e) => {
                                                        setRateOfInterest(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>
                                            <div className="loan-counter-value">
                                                <h6 id="emi-interest-show">{rateOfInterest}</h6>
                                                <span>%</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-xl-5">
                                <div className="loan-calculation">
                                    <div className="loan-calculation-content total-loan-form-emi">
                                        <div className="total-loan-form-calculation">
                                            <div className="loan-calculation-details">
                                                <p className="loan-form-calculation">
                                                    <span>Monthly EMI</span>
                                                    <b>
                                                        $<i id="monthly-emi">{monthlyemi}</i>
                                                    </b>
                                                </p>
                                                <p className="loan-form-calculation">
                                                    <span>Total Interest</span>
                                                    <b>
                                                        $<i id="total-interest">{totalinterest}</i>
                                                    </b>
                                                </p>
                                                <p className="loan-form-calculation">
                                                    <span>Total Amount Payable</span>
                                                    <b>
                                                        $<i id="total-amount">{totalamount}</i>
                                                    </b>
                                                </p>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <Link
                                                        to="/applynow"
                                                        className="thm-btn"
                                                        target="_blank"
                                                        rel="nofollow"
                                                    >
                                                        Apply Loan
                                                    </Link>
                                                </div>
                                                <div className="col-xl-6">
                                                    <Link
                                                        to="#"
                                                        data-target="amortization-chart"
                                                        className="thm-btn scroll-to-chart"
                                                        rel="nofollow"
                                                    >
                                                        View Chart
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="loan-start-date">
                                    <label for="start-date">
                                        <h4>Select Start Date</h4>
                                    </label>
                                    <input
                                        type="date"
                                        id="start"
                                        name="trip-start"
                                        value="2018-07-22"
                                    />

                                    <i
                                        className="fas fa-calendar-alt"
                                    // onChange={(e) => {
                                    //   e.target.value;
                                    // }}
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="main-heading block-title text-left">
                                    <p className="block-title__tagline mb-0">
                                        Amortization Schedule
                                    </p>
                                    <h3 className="block-title__title w-500">
                                        Amortization Schedule
                                    </h3>
                                </div>
                                <div className="amortization-schedule">
                                    <div className="amortization-inner">
                                        <div className="amortization-title">
                                            <div className="amortization-title-inner">Month</div>
                                            <div className="amortization-title-inner">
                                                Principal <span>(A)</span>
                                            </div>
                                            <div className="amortization-title-inner">
                                                Interest Paid <span>(B)</span>
                                            </div>
                                            <div className="amortization-title-inner total-payment-title">
                                                Total Payment <span>(A + B)</span>
                                            </div>
                                            <div className="amortization-title-inner">Balance</div>
                                        </div>
                                        <div className="amortization-content">
                                            {data.map((item) => (
                                                <div className="amortization-column-outer">
                                                    <div className="amortization-column sum">
                                                        <div className="amortization-data year-outer">
                                                            <i className="fas fa-plus-circle"></i>
                                                            <span>{item.months}</span>
                                                        </div>
                                                        <div className="amortization-data principal-sum">
                                                            $<span>{item.Principal}</span>
                                                        </div>
                                                        <div className="amortization-data interest-sum">
                                                            $<span>{item.InterestPaid}</span>
                                                        </div>
                                                        <div className="amortization-data total-payment-sum">
                                                            $<span>{item.Principal + item.InterestPaid}</span>
                                                        </div>
                                                        <div className="amortization-data balance-sum">
                                                            $<span>{item.Balance}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-heading">
                                    <h3 className="block-title__title w-500">
                                        Amortization Chart
                                    </h3>
                                </div>
                                <div className="loan-calculation-chart">
                                    <div
                                        id="loan-chart-amortization"
                                        data-highcharts-chart="11"
                                        style={{ overflow: "hidden" }}
                                    >
                                        <div
                                            id="highcharts-cla4lni-145"
                                            dir="ltr"
                                            className="highcharts-container "
                                            style={{
                                                position: "relative",
                                                overflow: "hidden",
                                                width: "1176px",
                                                height: "400px",
                                                textAlign: "left",
                                                lineHeight: "normal",
                                                zIndex: "0",
                                                webkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                                userSelect: " none",
                                                touchAction: "manipulation",
                                                outline: " none",
                                            }}
                                        >
                                            <svg
                                                version="1.1"
                                                className="highcharts-root fonts-grp"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1176"
                                                height="400"
                                                viewBox="0 0 1176 400"
                                            >
                                                <desc>Created with Highcharts 10.1.0</desc>
                                                <defs>
                                                    <clipPath id="highcharts-cla4lni-146-">
                                                        <rect
                                                            x="0"
                                                            y="0"
                                                            width="1068"
                                                            height="315"
                                                            fill="none"
                                                        ></rect>
                                                    </clipPath>
                                                    <clipPath id="highcharts-cla4lni-158-">
                                                        <rect
                                                            x="0"
                                                            y="0"
                                                            width="1068"
                                                            height="315"
                                                            fill="none"
                                                        ></rect>
                                                    </clipPath>
                                                </defs>
                                                <rect
                                                    fill="#ffffff"
                                                    className="highcharts-background"
                                                    x="0"
                                                    y="0"
                                                    width="1176"
                                                    height="400"
                                                    rx="0"
                                                    ry="0"
                                                ></rect>
                                                <rect
                                                    fill="none"
                                                    className="highcharts-plot-background"
                                                    x="98"
                                                    y="10"
                                                    width="1068"
                                                    height="315"
                                                ></rect>
                                                <g
                                                    className="highcharts-grid highcharts-xaxis-grid"
                                                    data-z-index="1"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 194.5 10 L 194.5 325"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 291.5 10 L 291.5 325"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 388.5 10 L 388.5 325"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 485.5 10 L 485.5 325"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 582.5 10 L 582.5 325"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 680.5 10 L 680.5 325"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 777.5 10 L 777.5 325"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 874.5 10 L 874.5 325"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 971.5 10 L 971.5 325"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 1068.5 10 L 1068.5 325"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 1165.5 10 L 1165.5 325"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 97.5 10 L 97.5 325"
                                                        opacity="1"
                                                    ></path>
                                                </g>
                                                <g
                                                    className="highcharts-grid highcharts-yaxis-grid"
                                                    data-z-index="1"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="#e6e6e6"
                                                        stroke-width="1"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 98 325.5 L 1166 325.5"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#e6e6e6"
                                                        stroke-width="1"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 98 262.5 L 1166 262.5"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#e6e6e6"
                                                        stroke-width="1"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 98 199.5 L 1166 199.5"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#e6e6e6"
                                                        stroke-width="1"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 98 136.5 L 1166 136.5"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#e6e6e6"
                                                        stroke-width="1"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 98 73.5 L 1166 73.5"
                                                        opacity="1"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#e6e6e6"
                                                        stroke-width="1"
                                                        stroke-dasharray="none"
                                                        data-z-index="1"
                                                        className="highcharts-grid-line"
                                                        d="M 98 9.5 L 1166 9.5"
                                                        opacity="1"
                                                    ></path>
                                                </g>
                                                <rect
                                                    fill="none"
                                                    className="highcharts-plot-border"
                                                    data-z-index="1"
                                                    x="98"
                                                    y="10"
                                                    width="1068"
                                                    height="315"
                                                ></rect>
                                                <g
                                                    className="highcharts-axis highcharts-xaxis"
                                                    data-z-index="2"
                                                >
                                                    <path
                                                        fill="none"
                                                        className="highcharts-axis-line"
                                                        stroke="#ccd6eb"
                                                        stroke-width="1"
                                                        data-z-index="7"
                                                        d="M 98 325.5 L 1166 325.5"
                                                    ></path>
                                                </g>
                                                <g
                                                    className="highcharts-axis highcharts-yaxis"
                                                    data-z-index="2"
                                                >
                                                    <text
                                                        x="25.74169921875"
                                                        data-z-index="7"
                                                        text-anchor="middle"
                                                        transform="translate(0,0) rotate(270 25.74169921875 167.5)"
                                                        className="highcharts-axis-title"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            fill: "rgb(102, 102, 102);",
                                                        }}
                                                        y="167.5"
                                                    >
                                                        Balance
                                                    </text>
                                                    <path
                                                        fill="none"
                                                        className="highcharts-axis-line"
                                                        data-z-index="7"
                                                        d="M 98 10 L 98 325"
                                                    ></path>
                                                </g>
                                                <g className="highcharts-series-group" data-z-index="3">
                                                    <g
                                                        className="highcharts-series highcharts-series-0 highcharts-column-series highcharts-tracker"
                                                        data-z-index="0.1"
                                                        opacity="1"
                                                        transform="translate(98,10) scale(1 1)"
                                                        clip-path="url(#highcharts-cla4lni-158-)"
                                                    >
                                                        <rect
                                                            x="24.5"
                                                            y="246.5"
                                                            width="47"
                                                            height="38"
                                                            fill="#f7c35f"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="121.5"
                                                            y="40.5"
                                                            width="47"
                                                            height="144"
                                                            fill="#f7c35f"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="218.5"
                                                            y="40.5"
                                                            width="47"
                                                            height="133"
                                                            fill="#f7c35f"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="316.5"
                                                            y="40.5"
                                                            width="47"
                                                            height="121"
                                                            fill="#f7c35f"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="413.5"
                                                            y="40.5"
                                                            width="47"
                                                            height="108"
                                                            fill="#f7c35f"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="510.5"
                                                            y="40.5"
                                                            width="47"
                                                            height="94"
                                                            fill="#f7c35f"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="607.5"
                                                            y="40.5"
                                                            width="47"
                                                            height="80"
                                                            fill="#f7c35f"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="704.5"
                                                            y="40.5"
                                                            width="47"
                                                            height="63"
                                                            fill="#f7c35f"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="801.5"
                                                            y="40.5"
                                                            width="47"
                                                            height="46"
                                                            fill="#f7c35f"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="898.5"
                                                            y="40.5"
                                                            width="47"
                                                            height="27"
                                                            fill="#f7c35f"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="995.5"
                                                            y="109.5"
                                                            width="47"
                                                            height="6"
                                                            fill="#f7c35f"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                    </g>
                                                    <g
                                                        className="highcharts-markers highcharts-series-0 highcharts-column-series"
                                                        data-z-index="0.1"
                                                        opacity="1"
                                                        transform="translate(98,10) scale(1 1)"
                                                        clip-path="none"
                                                    ></g>
                                                    <g
                                                        className="highcharts-series highcharts-series-1 highcharts-column-series highcharts-tracker"
                                                        data-z-index="0.1"
                                                        opacity="1"
                                                        transform="translate(98,10) scale(1 1)"
                                                        clip-path="url(#highcharts-cla4lni-158-)"
                                                    >
                                                        <rect
                                                            x="24.5"
                                                            y="284.5"
                                                            width="47"
                                                            height="31"
                                                            fill="#e63a27"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="121.5"
                                                            y="184.5"
                                                            width="47"
                                                            height="131"
                                                            fill="rgb(230,58,39)"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="218.5"
                                                            y="173.5"
                                                            width="47"
                                                            height="142"
                                                            fill="#e63a27"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="316.5"
                                                            y="161.5"
                                                            width="47"
                                                            height="154"
                                                            fill="#e63a27"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="413.5"
                                                            y="148.5"
                                                            width="47"
                                                            height="167"
                                                            fill="#e63a27"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="510.5"
                                                            y="134.5"
                                                            width="47"
                                                            height="181"
                                                            fill="#e63a27"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="607.5"
                                                            y="120.5"
                                                            width="47"
                                                            height="195"
                                                            fill="rgb(230,58,39)"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="704.5"
                                                            y="103.5"
                                                            width="47"
                                                            height="212"
                                                            fill="rgb(230,58,39)"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="801.5"
                                                            y="86.5"
                                                            width="47"
                                                            height="229"
                                                            fill="rgb(230,58,39)"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="898.5"
                                                            y="67.5"
                                                            width="47"
                                                            height="248"
                                                            fill="rgb(230,58,39)"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                        <rect
                                                            x="995.5"
                                                            y="115.5"
                                                            width="47"
                                                            height="200"
                                                            fill="rgb(230,58,39)"
                                                            stroke="#ffffff"
                                                            stroke-width="1"
                                                            opacity="1"
                                                            className="highcharts-point"
                                                        ></rect>
                                                    </g>
                                                    <g
                                                        className="highcharts-markers highcharts-series-1 highcharts-column-series"
                                                        data-z-index="0.1"
                                                        opacity="1"
                                                        transform="translate(98,10) scale(1 1)"
                                                        clip-path="none"
                                                    ></g>
                                                </g>
                                                <text
                                                    x="588"
                                                    text-anchor="middle"
                                                    className="highcharts-title"
                                                    data-z-index="4"
                                                    style={{
                                                        color: "rgb(51, 51, 51)",
                                                        fontSize: "18px",
                                                        fill: "rgb(51, 51, 51)",
                                                    }}
                                                    y="24"
                                                ></text>
                                                <text
                                                    x="588"
                                                    text-anchor="middle"
                                                    className="highcharts-subtitle"
                                                    data-z-index="4"
                                                    style={{
                                                        color: "rgb(102, 102, 102)",
                                                        fill: "rgb(102, 102, 102)",
                                                    }}
                                                    y="24"
                                                ></text>
                                                <text
                                                    x="10"
                                                    text-anchor="start"
                                                    className="highcharts-caption"
                                                    data-z-index="4"
                                                    style={{
                                                        color: "rgb(102, 102, 102)",
                                                        fill: "rgb(102, 102, 102)",
                                                    }}
                                                    y="397"
                                                ></text>
                                                <g
                                                    className="highcharts-legend highcharts-no-tooltip"
                                                    data-z-index="7"
                                                    transform="translate(500,359)"
                                                >
                                                    <rect
                                                        fill="none"
                                                        className="highcharts-legend-box"
                                                        rx="0"
                                                        ry="0"
                                                        x="0"
                                                        y="0"
                                                        width="176"
                                                        height="26"
                                                    ></rect>
                                                    <g data-z-index="1">
                                                        <g>
                                                            <g
                                                                className="highcharts-legend-item highcharts-column-series highcharts-color-undefined highcharts-series-0"
                                                                data-z-index="1"
                                                                transform="translate(8,3)"
                                                            >
                                                                <text
                                                                    x="21"
                                                                    text-anchor="start"
                                                                    data-z-index="2"
                                                                    y="15"
                                                                    style={{
                                                                        color: "rgb(51, 51, 51)",
                                                                        cursor: "pointer",
                                                                        fontSize: "12px",
                                                                        fontWeight: "bold",
                                                                        fill: "rgb(51, 51, 51)",
                                                                    }}
                                                                >
                                                                    Interest
                                                                </text>
                                                                <rect
                                                                    x="2"
                                                                    y="4"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="#f7c35f"
                                                                    rx="6"
                                                                    ry="6"
                                                                    className="highcharts-point"
                                                                    data-z-index="3"
                                                                ></rect>
                                                            </g>
                                                            <g
                                                                className="highcharts-legend-item highcharts-column-series highcharts-color-undefined highcharts-series-1"
                                                                data-z-index="1"
                                                                transform="translate(95.791015625,3)"
                                                            >
                                                                <text
                                                                    x="21"
                                                                    y="15"
                                                                    text-anchor="start"
                                                                    data-z-index="2"
                                                                    style={{
                                                                        color: "rgb(51, 51, 51)",
                                                                        cursor: "pointer",
                                                                        fontSize: "12px",
                                                                        fontWeight: "bold",
                                                                        fill: "rgb(51, 51, 51)",
                                                                    }}
                                                                >
                                                                    Principal
                                                                </text>
                                                                <rect
                                                                    x="2"
                                                                    y="4"
                                                                    width="12"
                                                                    height="12"
                                                                    fill="#e63a27"
                                                                    rx="6"
                                                                    ry="6"
                                                                    className="highcharts-point"
                                                                    data-z-index="3"
                                                                ></rect>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g
                                                    className="highcharts-axis-labels highcharts-xaxis-labels"
                                                    data-z-index="7"
                                                >
                                                    <text
                                                        x="146.54545454545547"
                                                        text-anchor="middle"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="344"
                                                        opacity="1"
                                                    >
                                                        2022
                                                    </text>
                                                    <text
                                                        x="243.63636363635544"
                                                        text-anchor="middle"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="344"
                                                        opacity="1"
                                                    >
                                                        2023
                                                    </text>
                                                    <text
                                                        x="340.7272727272654"
                                                        text-anchor="middle"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="344"
                                                        opacity="1"
                                                    >
                                                        2024
                                                    </text>
                                                    <text
                                                        x="437.81818181817545"
                                                        text-anchor="middle"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="344"
                                                        opacity="1"
                                                    >
                                                        2025
                                                    </text>
                                                    <text
                                                        x="534.9090909090855"
                                                        text-anchor="middle"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="344"
                                                        opacity="1"
                                                    >
                                                        2026
                                                    </text>
                                                    <text
                                                        x="631.9999999999955"
                                                        text-anchor="middle"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="344"
                                                        opacity="1"
                                                    >
                                                        2027
                                                    </text>
                                                    <text
                                                        x="729.0909090909055"
                                                        text-anchor="middle"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="344"
                                                        opacity="1"
                                                    >
                                                        2028
                                                    </text>
                                                    <text
                                                        x="826.1818181818155"
                                                        text-anchor="middle"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="344"
                                                        opacity="1"
                                                    >
                                                        2029
                                                    </text>
                                                    <text
                                                        x="923.2727272727255"
                                                        text-anchor="middle"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="344"
                                                        opacity="1"
                                                    >
                                                        2030
                                                    </text>
                                                    <text
                                                        x="1020.3636363636456"
                                                        text-anchor="middle"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="344"
                                                        opacity="1"
                                                    >
                                                        2031
                                                    </text>
                                                    <text
                                                        x="1117.4545454545455"
                                                        text-anchor="middle"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="344"
                                                        opacity="1"
                                                    >
                                                        2032
                                                    </text>
                                                </g>
                                                <g
                                                    className="highcharts-axis-labels highcharts-yaxis-labels"
                                                    data-z-index="7"
                                                >
                                                    <text
                                                        x="83"
                                                        text-anchor="end"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="329"
                                                        opacity="1"
                                                    >
                                                        $0
                                                    </text>
                                                    <text
                                                        x="83"
                                                        text-anchor="end"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="266"
                                                        opacity="1"
                                                    >
                                                        $10,000
                                                    </text>
                                                    <text
                                                        x="83"
                                                        text-anchor="end"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="203"
                                                        opacity="1"
                                                    >
                                                        $20,000
                                                    </text>
                                                    <text
                                                        x="83"
                                                        text-anchor="end"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="140"
                                                        opacity="1"
                                                    >
                                                        $30,000
                                                    </text>
                                                    <text
                                                        x="83"
                                                        text-anchor="end"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="77"
                                                        opacity="1"
                                                    >
                                                        $40,000
                                                    </text>
                                                    <text
                                                        x="83"
                                                        text-anchor="end"
                                                        transform="translate(0,0)"
                                                        style={{
                                                            color: "rgb(102, 102, 102)",
                                                            cursor: "default",
                                                            fontSize: "11px",
                                                            fill: "rgb(102, 102, 102)",
                                                        }}
                                                        y="14"
                                                        opacity="1"
                                                    >
                                                        $50,000
                                                    </text>
                                                </g>
                                                <text
                                                    x="1166"
                                                    className="highcharts-credits"
                                                    text-anchor="end"
                                                    data-z-index="8"
                                                    y="395"
                                                    style={{
                                                        cursor: "pointer",
                                                        color: "rgb(153, 153, 153)",
                                                        fontsize: "9px",
                                                        fill: "rgb(153, 153, 153)",
                                                    }}
                                                >
                                                    Highcharts.com
                                                </text>
                                                <g
                                                    className="highcharts-label highcharts-tooltip highcharts-color-undefined"
                                                    data-z-index="8"
                                                    transform="translate(165,-9999)"
                                                    style={{
                                                        cursor: "default",
                                                        whitespace: "nowrap",
                                                        pointerEvents: "none",
                                                    }}
                                                    opacity="0"
                                                    visibility="hidden"
                                                >
                                                    <path
                                                        fill="none"
                                                        className="highcharts-label-box highcharts-tooltip-box highcharts-shadow"
                                                        d="M 3.5 0.5 L 155.5 0.5 C 158.5 0.5 158.5 0.5 158.5 3.5 L 158.5 61.5 C 158.5 64.5 158.5 64.5 155.5 64.5 L 84.5 64.5 L 78.5 70.5 L 72.5 64.5 L 3.5 64.5 C 0.5 64.5 0.5 64.5 0.5 61.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"
                                                        stroke="#000000"
                                                        stroke-opacity="0.049999999999999996"
                                                        stroke-width="5"
                                                        transform="translate(1, 1)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        className="highcharts-label-box highcharts-tooltip-box highcharts-shadow"
                                                        d="M 3.5 0.5 L 155.5 0.5 C 158.5 0.5 158.5 0.5 158.5 3.5 L 158.5 61.5 C 158.5 64.5 158.5 64.5 155.5 64.5 L 84.5 64.5 L 78.5 70.5 L 72.5 64.5 L 3.5 64.5 C 0.5 64.5 0.5 64.5 0.5 61.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"
                                                        stroke="#000000"
                                                        stroke-opacity="0.09999999999999999"
                                                        stroke-width="3"
                                                        transform="translate(1, 1)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        className="highcharts-label-box highcharts-tooltip-box highcharts-shadow"
                                                        d="M 3.5 0.5 L 155.5 0.5 C 158.5 0.5 158.5 0.5 158.5 3.5 L 158.5 61.5 C 158.5 64.5 158.5 64.5 155.5 64.5 L 84.5 64.5 L 78.5 70.5 L 72.5 64.5 L 3.5 64.5 C 0.5 64.5 0.5 64.5 0.5 61.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"
                                                        stroke="#000000"
                                                        stroke-opacity="0.15"
                                                        stroke-width="1"
                                                        transform="translate(1, 1)"
                                                    ></path>
                                                    <path
                                                        fill="rgba(247,247,247,0.85)"
                                                        className="highcharts-label-box highcharts-tooltip-box"
                                                        d="M 3.5 0.5 L 155.5 0.5 C 158.5 0.5 158.5 0.5 158.5 3.5 L 158.5 61.5 C 158.5 64.5 158.5 64.5 155.5 64.5 L 84.5 64.5 L 78.5 70.5 L 72.5 64.5 L 3.5 64.5 C 0.5 64.5 0.5 64.5 0.5 61.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"
                                                        stroke="#e63a27"
                                                        stroke-width="1"
                                                    ></path>
                                                    <text
                                                        x="8"
                                                        data-z-index="1"
                                                        y="20"
                                                        style={{
                                                            color: "rgb(51, 51, 51)",
                                                            fontSize: "12px",
                                                            fill: "rgb(51, 51, 51)",
                                                        }}
                                                    >
                                                        <tspan style={{ fontWeight: "bold" }}>
                                                            Year: 2023
                                                        </tspan>
                                                        <tspan className="highcharts-br" dy="15" x="8">

                                                        </tspan>
                                                        Principal: $20,827
                                                        <tspan className="highcharts-br" dy="15" x="8">

                                                        </tspan>
                                                        Total Payment: $43,678
                                                    </text>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div id="loan-chart-amortization"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default First