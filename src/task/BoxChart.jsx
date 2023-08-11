import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import Chart from "react-apexcharts";
import { useState } from 'react';


export default function BoxChart() {

    //=================  chart 1  ===================//
    const [chart, setchart] = useState({
        options: {
            colors: ["#FF6666", "#4166F8", "#FFCC5D"],
            borderRadius: 50,
            chart: {
                id: "basic-bar"
            },
            plotOptions: {
                bar: {
                    columnWidth: '25%',
                    borderRadius: "4",
                    horizontal: false,

                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

            },
            yaxis: {
                show: false,
            }
        },
        series: [
            {
                name: "Active Member",
                data: [30, 40, 45, 50, 49, 60]
            },
            {
                name: "Ready to Inactive",
                data: [10, 30, 35, 30, 29, 50]
            },
            {
                name: "Inactive Members",
                data: [10, 30, 35, 30, 29, 30]
            }
        ]
    });
    //=============================  chart 2  =============================//
    const [second, setsecond] = useState({
        series: [{
            name: 'Groups ',
            data: [44, 55, 57, 56, 61, 58, 0]
        }, {
            name: 'Employees ',
            data: [76, 85, 101, 98, 87, 105, 91]
        }, {
            name: 'Divisions ',
            data: [35, 41, 36, 26, 45, 48, 52]
        },
        {
            name: 'Locations',
            data: [76, 85, 101, 98, 87, 105, 0]
        },
        ],
        options: {
            colors: ["#FEB760", "#938EF8", "#61DB2C", "#E30A08"],
            
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '60%',
                    endingShape: 'rounded',
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    borderRadiusWhenStacked: 'last',
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 6,
                colors: ['transparent']
            },
            legend: {
                // show: false,
                horizontalAlign: 'left', 
              },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },
    });
    //===================== chart 3 ========================//
    const [three, setthree] = useState({
        series: [{
            name: 'Claim Received ',
            data: [76, 85, 101, 98, 87, 75]
        }, {
            name: 'Claims Processed ',
            data: [36, 45, 71, 58, 57, 0]
        }
        ],
        options: {
            colors: ["#1B9B93", "#FFB75D"],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '40%',
                    endingShape: 'rounded',
                    // borderRadius: 10,
                    borderRadius: 10,
                    borderRadiusApplication: 'end',
                    borderRadiusWhenStacked: 'last',
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 0,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },
    });
    //==================== chart 4 ========================//
    const [mix, setmix] = useState({
        series: [
            {
                name: "series-1",
                group: "series1",
                type: 'column',
                data: [70, 40, 45, 50, 49,]
            },
            {
                name: "series-2",
                group: "series2",
                type: 'column',
                data: [60, 70, 90, 80, 70]
            },
            {
                name: 'line',
                type: 'line',
                group: "series2 series1",
                data: [30, 65, 45, 40, 65,]
            },
            
        ],
       
        options: {
            colors: ["#895BF1", "#895BF1", "#3BB964"],
            chart: {
                height: 350,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 1,
                    left: 1,
                    blur: 3,
                    opacity: 0.2
                },
                toolbar: {
                    show: false,
                },
            },
            markers: {
                size: 7,
            },
            stroke: {
                show: true,
                width: [12, 12, 3.5],
                colors: ["transparent", 'transparent', "#3BB964"]
            },

            grid: {
                show: true,
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: true
                    },
                   
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                },
            },
            
            xaxis: {
                tickPlacement: 'on',
                categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
            },
            yaxis: {
                show: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: 55,
                    borderRadius: 12,
                    borderRadiusApplication: 'end',
                    borderRadiusWhenStacked: 'last',
                    horizontal: false,
                }
            },
        },

    });

    return (

        <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(223, 219, 219, 0.459)", height: '100%', width: "100%", padding: 10 }}>
            {/* // ========== chart 1 =========================// */}
            <Grid item xs={12} sm={12} lg={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        width: 718,
                        height: 460,
                        backgroundColor: 'white',
                        borderRadius: 4,
                        padding: 5
                    }}
                >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6} sx={{ height: 50, width: "100%", }}>
                            <Typography variant="h6" component="h2" sx={{ display: "flex", fontSize: 24, fontFamily: 'Montserrat', fontWeight: 'SemiBold', color: '#7583A0' }}>
                                Premium VS Claims Report
                            </Typography>
                            <Typography variant="h4" component="h2" sx={{ display: "flex", fontSize: 16, fontFamily: 'Poppins', fontWeight: 'SemiBold', color: '#C9CACF' }}>
                                All Groups , Divisions , Locations
                            </Typography>
                        </Grid>
                    </Grid>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                        <Chart
                            options={chart.options}
                            series={chart.series}
                            type="bar"
                            width="720"
                            height="390"
                        />
                    </div>
                </Box>
            </Grid>

            {/* ======================== chart 2 ============================= */}
            <Grid item xs={12} sm={12} lg={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        width: 718,
                        height: 460,
                        backgroundColor: 'white',
                        borderRadius: 4,
                        padding: 5
                    }}
                >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6} sx={{ height: 50, width: "100%", }}>
                            <Typography variant="h6" component="h2" sx={{ display: "flex", fontSize: 24, fontFamily: 'Montserrat', fontWeight: 'SemiBold', color: '#7583A0' }}>
                                Premium VS Claims Report
                            </Typography>
                            <Typography variant="h4" component="h2" sx={{ display: "flex", fontSize: 16, fontFamily: 'Poppins', fontWeight: 'SemiBold', color: '#C9CACF' }}>
                                All Groups , Divisions , Locations
                            </Typography>
                        </Grid>
                    </Grid>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                        <Chart
                            options={second.options}
                            series={second.series}
                            type="bar"
                            width="670"
                            height="380"
                        />
                    </div>
                </Box>
            </Grid>

            {/* ===================================  chart 3  ======================================== */}
            <Grid item xs={12} sm={12} lg={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        width: 718,
                        height: 460,
                        backgroundColor: 'white',
                        borderRadius: 4,
                        padding: 5
                    }}
                >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6} sx={{ height: 50, width: "100%", }}>
                            <Typography variant="h6" component="h2" sx={{ display: "flex", fontSize: 24, fontFamily: 'Montserrat', fontWeight: 'SemiBold', color: '#7583A0' }}>
                                Premium VS Claims Report
                            </Typography>
                            <Typography variant="h4" component="h2" sx={{ display: "flex", fontSize: 16, fontFamily: 'Poppins', fontWeight: 'SemiBold', color: '#C9CACF' }}>
                                All Groups , Divisions , Locations
                            </Typography>
                        </Grid>
                    </Grid>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                        <Chart
                            options={three.options}
                            series={three.series}
                            type="bar"
                            width="710"
                            height="380"
                        />
                    </div>
                </Box>
            </Grid>
            {/* ==========================================  chart 4 =================================== */}
            <Grid item xs={12} sm={12} lg={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        width: 718,
                        height: 460,
                        backgroundColor: 'white',
                        borderRadius: 4,
                        padding: 5
                    }}
                >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6} sx={{ height: 50, width: "100%", }}>
                            <Typography variant="h6" component="h2" sx={{ display: "flex", fontSize: 24, fontFamily: 'Montserrat', fontWeight: 'SemiBold', color: '#7583A0' }}>
                                Premium VS Claims Report
                            </Typography>
                            <Typography variant="h4" component="h2" sx={{ display: "flex", fontSize: 16, fontFamily: 'Poppins', fontWeight: 'SemiBold', color: '#C9CACF' }}>
                                All Groups , Divisions , Locations
                            </Typography>
                        </Grid>
                    </Grid>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                        <Chart
                            options={mix.options}
                            series={mix.series}
                            type="line"
                            width="730"
                            height="380"
                        />
                    </div>
                </Box>
            </Grid>
        </Grid>
    );
}