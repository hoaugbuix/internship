import React from "react";
import "./DashboardLayout.style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SliderBar from "../../components/SliderBar/SliderBar";
import BarChart from "./Chart/BarChart";
import User from "./User/User";
import Teacher from "./Teacher/Teacher";
import TopNav from "../../components/TopNav/TopNav";
// import SideBar from "../../components/SideBar/SideBar";
// import TopNav from "../../components/TopNav/TopNav";
// import Dashboard from "../../pages/Dashboard/Dashboard";




// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Badge from "../../components/Badge/Badge";
// import StatusCard from "../../components/StatusCard/StatusCard";
// import Table from "../../components/Table/Table";

// import statusCards from '../../constains/status-card-data.json'


// const chartOptions = {
//     series: [{
//         name: 'Online Customers',
//         data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
//     }, {
//         name: 'Store Customers',
//         data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
//     }],
//     options: {
//         color: ['#6ab04c', '#2980b9'],
//         chart: {
//             background: 'transparent'
//         },
//         dataLabels: {
//             enabled: false
//         },
//         stroke: {
//             curve: 'smooth'
//         },
//         xaxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
//         },
//         legend: {
//             position: 'top'
//         },
//         grid: {
//             show: false
//         }
//     }
// }

// const topCustomers = {
//     head: [
//         'user',
//         'total orders',
//         'total spending'
//     ],
//     body: [
//         {
//             "username": "john doe",
//             "order": "490",
//             "price": "$15,870"
//         },
//         {
//             "username": "frank iva",
//             "order": "250",
//             "price": "$12,251"
//         },
//         {
//             "username": "anthony baker",
//             "order": "120",
//             "price": "$10,840"
//         },
//         {
//             "username": "frank iva",
//             "order": "110",
//             "price": "$9,251"
//         },
//         {
//             "username": "anthony baker",
//             "order": "80",
//             "price": "$8,840"
//         }
//     ]
// }

// const renderCusomerHead = (item: any, index: number) => (
//     <th key={index}>{item}</th>
// )

// const renderCusomerBody = (item: any, index: number) => (
//     <tr key={index}>
//         <td>{item.username}</td>
//         <td>{item.order}</td>
//         <td>{item.price}</td>
//     </tr>
// )

// const latestOrders = {
//     header: [
//         "order id",
//         "user",
//         "total price",
//         "date",
//         "status"
//     ],
//     body: [
//         {
//             id: "#OD1711",
//             user: "john doe",
//             date: "17 Jun 2021",
//             price: "$900",
//             status: "shipping"
//         },
//         {
//             id: "#OD1712",
//             user: "frank iva",
//             date: "1 Jun 2021",
//             price: "$400",
//             status: "paid"
//         },
//         {
//             id: "#OD1713",
//             user: "anthony baker",
//             date: "27 Jun 2021",
//             price: "$200",
//             status: "pending"
//         },
//         {
//             id: "#OD1712",
//             user: "frank iva",
//             date: "1 Jun 2021",
//             price: "$400",
//             status: "paid"
//         },
//         {
//             id: "#OD1713",
//             user: "anthony baker",
//             date: "27 Jun 2021",
//             price: "$200",
//             status: "refund"
//         }
//     ]
// }

// const orderStatus: any = {
//     "shipping": "primary",
//     "pending": "warning",
//     "paid": "success",
//     "refund": "danger"
// }

// const renderOrderHead = (item: any, index: number) => (
//     <th key={index}>{item}</th>
// )

// const renderOrderBody = (item: any, index: number) => (
//     <tr key={index}>
//         <td>{item.id}</td>
//         <td>{item.user}</td>
//         <td>{item.price}</td>
//         <td>{item.date}</td>
//         <td>
//             <Badge type={orderStatus[item.status]} content={item.status} />
//         </td>
//     </tr>
// )

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <BarChart />
    },
    {
        path: "/user",
        main: () => <User />
    },
    {
        path: "/teacher",
        main: () => <Teacher />
    }];
const DashboardLayout = () => {

    return (
        <>
            <Router>
                <SliderBar />
                <section className="home-section">
                    {/* <div className="text" >Dashboard</div> */}
                    <TopNav />
                    <div className="gird wide">
                        <Switch >
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={'/dashboard' + route.path}
                                    exact={route?.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </div>
                </section>

            </Router>
        </>
    )
};

export default DashboardLayout;


// <Route render={(props) => (
//     <div className={`layout `}>
//         <SideBar {...props} />
//         <div className="layout__content">
//             <TopNav />
//             <div className="layout__content-main">
//                 <div>
//                     <h2 className="page-header gird">Dashboard</h2>
//                     <div className="row">
//                         <div className="col-6">
//                             <div className="row">
//                                 {
//                                     statusCards?.map((item: any, index: number) => (
//                                         <div className="col-6" key={index}>
//                                             <StatusCard
//                                                 icon={item.icon}
//                                                 count={item.count}
//                                                 title={item.title}
//                                             />
//                                         </div>
//                                     ))
//                                 }
//                             </div>
//                         </div>
//                         <div className="col-6">
//                             <div className="card full-height">
//                                 {/* chart */}
//                                 {/* <Chart
//             options={themeReducer === 'theme-mode-dark' ? {
//                 ...chartOptions.options,
//                 theme: { mode: 'dark' }
//             } : {
//                 ...chartOptions.options,
//                 theme: { mode: 'light' }
//             }}
//             series={chartOptions.series}
//             type='line'
//             height='100%'
//         /> */}
//                             </div>
//                         </div>
//                         <div className="col-5">
//                             <div className="card">
//                                 <div className="card__header">
//                                     <h3>top customers</h3>
//                                 </div>
//                                 <div className="card__body">
//                                     <Table
//                                         headData={topCustomers.head}
//                                         renderHead={(item: any, index: number) => renderCusomerHead(item, index)}
//                                         bodyData={topCustomers.body}
//                                         renderBody={(item: any, index: number) => renderCusomerBody(item, index)}
//                                     />
//                                 </div>
//                                 <div className="card__footer">
//                                     <Link to='/'>view all</Link>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-7">
//                             <div className="card">
//                                 <div className="card__header">
//                                     <h3>latest orders</h3>
//                                 </div>
//                                 <div className="card__body">
//                                     <Table
//                                         headData={latestOrders.header}
//                                         renderHead={(item: any, index: number) => renderOrderHead(item, index)}
//                                         bodyData={latestOrders.body}
//                                         renderBody={(item: any, index: number) => renderOrderBody(item, index)}
//                                     />
//                                 </div>
//                                 <div className="card__footer">
//                                     <Link to='/'>view all</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </div>
// )} />