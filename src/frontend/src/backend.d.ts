import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    id: bigint;
    pricingInfo: string;
    requiredDocuments: Array<string>;
    name: string;
    description: string;
    processSteps: Array<string>;
    category: string;
    timeline: string;
}
export interface StudyNote {
    id: bigint;
    keySections: Array<string>;
    title: string;
    notesContent: string;
    subject: string;
    syllabusOutline: Array<string>;
    description: string;
}
export interface Document {
    id: bigint;
    requiredDocuments: Array<string>;
    name: string;
    description: string;
    processSteps: Array<string>;
    category: string;
    estimatedTime: string;
    feesInfo: string;
}
export interface backendInterface {
    filterDocumentsByCategory(category: string): Promise<Array<Document>>;
    filterServicesByCategory(category: string): Promise<Array<Service>>;
    getDocumentById(id: bigint): Promise<Document>;
    getServiceById(id: bigint): Promise<Service>;
    getStudyNoteById(id: bigint): Promise<StudyNote>;
    listDocuments(): Promise<Array<Document>>;
    listServices(): Promise<Array<Service>>;
    listStudyNotes(): Promise<Array<StudyNote>>;
    searchStudyNotesByKeyword(keyword: string): Promise<Array<StudyNote>>;
}
