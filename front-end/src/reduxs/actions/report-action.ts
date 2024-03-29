import * as types from "../constains/report-constain";

export const getReportStart = () => ({
    type: types.GET_REPORT_START
});

export const getReportSuccess = (reports: ResGetAllReportApi) => ({
    type: types.GET_REPORT_SUCCESS,
    payload: reports
});

export const getReportFailer = (messageError: string) => ({
    type: types.GET_REPORT_FAILER,
    payload: messageError
});


export const getReportByUserStart = () => ({
    type: types.GET_REPORT_BY_USER_START
});

export const getReportByUserSuccess = (report: ResGetReportByIdApi) => ({
    type: types.GET_REPORT_BY_USER_SUCCESS,
    payload: report
});

export const getReportByUserFailer = (messageError: string) => ({
    type: types.GET_REPORT_BY_USER_FAILER,
    payload: messageError
});