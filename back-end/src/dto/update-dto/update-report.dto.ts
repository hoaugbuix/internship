export class UpdateReportDto {
    readonly userId: string;
    readonly teacherId: string;
    readonly meetId: string;
    readonly contentReport: string;
    readonly teacherRequest: string;
    readonly expectedContent: string;
    readonly image: string;
    readonly reportName: string;
    readonly active: boolean | true;
    readonly reportDate: Date;
}