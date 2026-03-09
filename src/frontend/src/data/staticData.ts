// Static data for "Lets Make it Legal Enterprises"
// This data is sourced from the official document requirements brochure and BNS 2023 study notes.
// Used as a rich fallback when backend returns minimal seed data.

export interface StaticDocument {
  id: bigint;
  name: string;
  category: string;
  description: string;
  processSteps: string[];
  requiredDocuments: string[];
  estimatedTime: string;
  feesInfo: string;
}

export interface StaticStudyNote {
  id: bigint;
  title: string;
  subject: string;
  description: string;
  syllabusOutline: string[];
  keySections: string[];
  notesContent: string;
}

// ─── DOCUMENTS ────────────────────────────────────────────────────────────────

export const STATIC_DOCUMENTS: StaticDocument[] = [
  {
    id: 1n,
    name: "Gazette (Name Change)",
    category: "Identity",
    description:
      "Official government gazette notification for name change or date of birth correction.",
    processSteps: [
      "Collect required documents",
      "Fill Gazette application form",
      "Submit to Gazette office / SDM",
      "Affidavit notarized",
      "Publication in Official Gazette",
      "Receive certified copy",
    ],
    requiredDocuments: [
      "Photo & Signature",
      "Clear Copy of Aadhaar Card",
      "*If Minor – Parents Aadhaar Card",
      "Birth / School Leaving / Marriage Certificate OR Affidavit (for name change)",
      "*Gazette for Name Change & Birth Certificate for D.O.B Change",
    ],
    estimatedTime: "2-4 weeks",
    feesInfo: "As per government norms",
  },
  {
    id: 2n,
    name: "PAN Card (New / Renew)",
    category: "Identity",
    description:
      "Permanent Account Number card issued by Income Tax Department of India. Required for all financial transactions.",
    processSteps: [
      "Fill Form 49A (for Indian citizens)",
      "Submit documents online / offline",
      "Pay processing fee",
      "Signature/photo verification",
      "PAN allotted and card dispatched",
    ],
    requiredDocuments: [
      "Photo & Signature",
      "Clear Copy of Aadhaar Card",
      "*If Minor – Parents Aadhaar Card",
      "*Gazette for Name Change",
      "Birth Certificate for D.O.B Change",
    ],
    estimatedTime: "7-15 days",
    feesInfo: "INR 107 (physical card)",
  },
  {
    id: 3n,
    name: "Passport (New / Renew)",
    category: "Identity",
    description:
      "Official travel document issued by the Government of India. Required for international travel and serves as strong identity proof.",
    processSteps: [
      "Register on Passport Seva Portal",
      "Fill online application form",
      "Book appointment at PSK / POPSK",
      "Visit passport office with original documents",
      "Police verification (Normal scheme)",
      "Passport dispatched by post",
    ],
    requiredDocuments: [
      "Aadhaar Card & PAN Card",
      "Birth Certificate or School Leaving Certificate",
      "Education Qualification proof",
      "Parents Birth / Death Certificate",
      "*Marriage Certificate / Bank Passbook",
      "Local Police Station NOC",
      "Email ID & Mobile Number",
    ],
    estimatedTime: "2-3 weeks (Tatkaal: 1-3 days)",
    feesInfo: "INR 1,500 (Normal) / INR 3,500 (Tatkaal)",
  },
  {
    id: 4n,
    name: "Marriage Certificate",
    category: "Identity",
    description:
      "Legal proof of marriage registered under the Marriage Registration Act. Required for name change, visa, and legal purposes.",
    processSteps: [
      "Collect and arrange all documents",
      "Fill marriage registration application",
      "Submit at Sub-Registrar office",
      "Verification by Marriage Officer",
      "Both parties & witnesses sign",
      "Marriage Certificate issued",
    ],
    requiredDocuments: [
      "Husband – Aadhaar Card or Passport",
      "School L.C. / Birth Certificate or Passport (Any 1)",
      "Wife – Aadhaar Card / Passport",
      "4 Witness Aadhaar Cards & Photos",
      "Wedding Card & 2 Couple Photos",
      "Kazi / Pandit – Aadhaar Card",
    ],
    estimatedTime: "7-15 days",
    feesInfo: "INR 100-500 as per state norms",
  },
  {
    id: 5n,
    name: "Domicile Certificate",
    category: "Identity",
    description:
      "Certificate issued by state government confirming permanent residency. Required for educational admissions, government jobs, and state schemes.",
    processSteps: [
      "Collect documents",
      "Apply at Tehsil / SDM office or online portal",
      "Document verification by officer",
      "Field inquiry if applicable",
      "Certificate issued and signed",
    ],
    requiredDocuments: [
      "Aadhaar Card & PAN Card",
      "Birth Certificate",
      "School Leaving Certificate / Bonafide",
      "Light Bill of 10 Years",
      "Ration Card / Bank Passbook",
      "*Below 18 Years: Father's Domicile & Affidavit",
    ],
    estimatedTime: "7-21 days",
    feesInfo: "INR 20-100 (state-dependent)",
  },
  {
    id: 6n,
    name: "Income Certificate",
    category: "Identity",
    description:
      "Certificate issued by the Tehsildar certifying annual family income. Required for scholarships, reservations, and government schemes.",
    processSteps: [
      "Apply at Tehsil / SDM office or e-district portal",
      "Submit required documents",
      "Verification by Patwari / Revenue Inspector",
      "Scrutiny by Tehsildar",
      "Certificate issued",
    ],
    requiredDocuments: [
      "Aadhaar Card & PAN Card",
      "Ration Card & Recent Light Bill",
      "Birth Certificate",
      "School Leaving Certificate",
      "Income Proof – MLA Letter / Salary Certificate / ITR / Form 16",
      "Photo / Mobile Number & Email ID",
    ],
    estimatedTime: "7-15 days",
    feesInfo: "INR 20-50",
  },
  {
    id: 7n,
    name: "Voter ID Card (New)",
    category: "Identity",
    description:
      "Electoral Photo Identity Card (EPIC) issued by the Election Commission of India.",
    processSteps: [
      "Apply online on voter.eci.gov.in (Form 6)",
      "Fill personal details and upload documents",
      "BLO verification at address",
      "Name added to Electoral Roll",
      "Voter ID card dispatched",
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "Photo, Mobile Number & Email",
      "Electricity Bill (address proof)",
      "Parents Voter ID (for first-time applicants)",
    ],
    estimatedTime: "2-4 weeks",
    feesInfo: "Free",
  },
  {
    id: 8n,
    name: "Ayushman Card",
    category: "Identity",
    description:
      "Ayushman Bharat PM-JAY health card providing cashless treatment up to INR 5 lakh per year.",
    processSteps: [
      "Check eligibility on pmjay.gov.in",
      "Visit nearest CSC / Ayushman Mitra",
      "Biometric verification",
      "Ayushman card generated and issued",
    ],
    requiredDocuments: ["Ration Card", "Aadhaar Card"],
    estimatedTime: "Same day to 3 days",
    feesInfo: "Free",
  },
  {
    id: 9n,
    name: "ABHA Card",
    category: "Identity",
    description:
      "Ayushman Bharat Health Account – unique 14-digit health ID for digital health records under Ayushman Bharat Digital Mission.",
    processSteps: [
      "Visit healthid.ndhm.gov.in or nearest CSC",
      "Enter Aadhaar / Driving License number",
      "OTP verification",
      "ABHA card generated instantly",
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "Mobile Number for OTP",
      "Driving License (if Aadhaar not available)",
    ],
    estimatedTime: "Instant",
    feesInfo: "Free",
  },
  {
    id: 10n,
    name: "Senior Citizen Card",
    category: "Identity",
    description:
      "Identity card issued to senior citizens (60+ years) for availing government benefits, concessions, and schemes.",
    processSteps: [
      "Apply at SDM / Municipal office or online portal",
      "Submit documents for verification",
      "Age verification by officer",
      "Card issued",
    ],
    requiredDocuments: [
      "Aadhaar Card & PAN Card",
      "Birth Certificate / School Leaving Certificate / Passport (Any 1)",
      "Photo & Mobile Number",
    ],
    estimatedTime: "7-14 days",
    feesInfo: "Free / Nominal",
  },
  {
    id: 11n,
    name: "GST Registration",
    category: "Business",
    description:
      "Goods and Services Tax registration mandatory for businesses with turnover above threshold.",
    processSteps: [
      "Register on GST portal (gst.gov.in)",
      "Fill Part-A of REG-01 form",
      "OTP verification",
      "Fill Part-B with business details",
      "Upload documents",
      "ARN generated; officer verification",
      "GSTIN issued",
    ],
    requiredDocuments: [
      "Aadhaar Card & PAN Card (proprietor / partners)",
      "Ration Card / Electricity Bill (address proof)",
      "Bank Account Statement / Passbook",
      "Business Registration / Partnership Deed (if applicable)",
      "Photo of Proprietor / Partners",
      "Email ID & Mobile Number",
    ],
    estimatedTime: "3-7 working days",
    feesInfo: "Free (government portal)",
  },
  {
    id: 12n,
    name: "Aadhaar Update & PVC Card",
    category: "Identity",
    description:
      "Update name, address, date of birth, or mobile in Aadhaar. Get PVC (plastic) Aadhaar card.",
    processSteps: [
      "Visit uidai.gov.in or nearest Aadhaar centre",
      "Select update type (address / name / DOB / mobile)",
      "Submit supporting documents",
      "Biometric verification for offline update",
      "Request processed and updated",
    ],
    requiredDocuments: [
      "Existing Aadhaar Card",
      "Proof of updated information (address / DOB / name proof)",
      "Mobile Number for OTP",
    ],
    estimatedTime: "5-90 days",
    feesInfo: "INR 50 (online update)",
  },
  {
    id: 13n,
    name: "E-Shram Card",
    category: "Identity",
    description:
      "National database of unorganised workers providing UAN and access to social security benefits.",
    processSteps: [
      "Visit eshram.gov.in or nearest CSC",
      "Enter Aadhaar number",
      "OTP verification via registered mobile",
      "Fill occupation and bank details",
      "E-Shram card generated",
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "Mobile Number linked to Aadhaar",
      "Bank Account details",
      "Income Certificate (optional)",
    ],
    estimatedTime: "Instant",
    feesInfo: "Free",
  },
  {
    id: 14n,
    name: "Student Scholarship",
    category: "Education",
    description:
      "Government scholarship schemes for students from economically weaker sections.",
    processSteps: [
      "Register on National Scholarship Portal (scholarships.gov.in)",
      "Fill application with academic details",
      "Upload required documents",
      "Institution verification",
      "District / state verification",
      "Scholarship credited to bank account",
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "School / College Bonafide Certificate",
      "Income Certificate",
      "Bank Account Details (student's account)",
      "Previous year marksheet",
      "Caste Certificate (if applicable)",
      "Domicile Certificate",
    ],
    estimatedTime: "1-3 months",
    feesInfo: "Free",
  },
  {
    id: 15n,
    name: "National Pension Scheme (NPS)",
    category: "Other",
    description:
      "Government-sponsored pension scheme for retirement planning for all Indian citizens aged 18-70.",
    processSteps: [
      "Visit nearest PoP / bank or enps.nsdl.com",
      "Fill registration form (Tier I mandatory)",
      "Submit KYC documents",
      "Minimum contribution INR 500",
      "PRAN allotted",
    ],
    requiredDocuments: [
      "Aadhaar Card & PAN Card",
      "Bank Account details",
      "Photo & Signature",
      "Mobile Number & Email ID",
      "Cancelled Cheque",
    ],
    estimatedTime: "1-7 days",
    feesInfo: "INR 40 (registration) + annual maintenance",
  },
];

// ─── STUDY NOTES ──────────────────────────────────────────────────────────────

export const STATIC_STUDY_NOTES: StaticStudyNote[] = [
  // ── Existing 5 notes ────────────────────────────────────────────────────────
  {
    id: 1n,
    title: "Introduction to Indian Constitution",
    subject: "Constitution",
    description:
      "Foundational notes on the Indian Constitution — structure, Preamble, and Fundamental Rights.",
    syllabusOutline: [
      "Historical Background & Constituent Assembly",
      "Preamble of the Constitution",
      "Union & its Territories (Articles 1-4)",
      "Citizenship (Articles 5-11)",
      "Fundamental Rights (Articles 12-35)",
      "Directive Principles of State Policy (Articles 36-51)",
      "Fundamental Duties (Article 51A)",
      "Constitutional Amendments",
    ],
    keySections: [
      "Preamble",
      "Part III – Fundamental Rights",
      "Part IV – DPSP",
      "Part IVA – Fundamental Duties",
    ],
    notesContent:
      "The Constitution of India came into effect on 26 January 1950. It is the supreme law of India and lays down the framework of the fundamental political code, structure, procedures, powers, and duties of government institutions. The Preamble declares India to be a Sovereign, Socialist, Secular, Democratic Republic.\n\nThe Constitution has 470 Articles in 25 Parts and 12 Schedules. Fundamental Rights (Articles 12-35) are justiciable rights guaranteed to all citizens. Directive Principles of State Policy (Articles 36-51) are non-justiciable guidelines for governance.\n\nFundamental Duties under Article 51A were added by the 42nd Constitutional Amendment in 1976.",
  },
  {
    id: 2n,
    title: "IPC – General Principles & Offences",
    subject: "IPC",
    description:
      "Study notes for the Indian Penal Code 1860 covering general principles, exceptions, and major offences.",
    syllabusOutline: [
      "Introduction & extent of IPC",
      "General Explanations (Sections 6-52A)",
      "General Exceptions (Sections 76-106)",
      "Abetment & Criminal Conspiracy",
      "Offences against the State",
      "Offences against Body (Murder, Hurt, Grievous Hurt)",
      "Offences against Property (Theft, Robbery, Dacoity)",
      "Offences against Women",
    ],
    keySections: [
      "Section 302 – Murder",
      "Section 376 – Rape",
      "Section 420 – Cheating",
      "Section 378 – Theft",
    ],
    notesContent:
      "The Indian Penal Code 1860 is the main criminal code of India. It is now being replaced by the Bharatiya Nyaya Sanhita (BNS) 2023. IPC covers all substantive criminal law applicable to citizens of India.\n\nMurder (Section 302) is punishable with death or life imprisonment. Culpable homicide (Section 299) is the broader genus of which murder is a species.\n\nOffences against property include theft (Section 378), extortion (Section 383), robbery (Section 390), and dacoity (Section 391).",
  },
  {
    id: 3n,
    title: "Family Law – Hindu, Muslim & Christian Law",
    subject: "Family Law",
    description:
      "Comprehensive notes on personal laws governing marriage, divorce, maintenance, adoption, and succession.",
    syllabusOutline: [
      "Hindu Marriage Act 1955",
      "Hindu Succession Act 1956",
      "Hindu Adoption and Maintenance Act 1956",
      "Muslim Personal Law (Shariat Application) Act 1937",
      "Muslim Women (Protection of Rights on Divorce) Act 1986",
      "Indian Christian Marriage Act 1872",
      "Special Marriage Act 1954",
      "Guardian and Wards Act 1890",
    ],
    keySections: [
      "Section 13 – Divorce under HMA",
      "Mehr and Talaq under Muslim Law",
      "Section 494 IPC – Bigamy",
      "Special Marriage Act 1954",
    ],
    notesContent:
      "Family law in India is not uniform and is governed by personal laws based on religion. Key areas include marriage, divorce, maintenance, custody, adoption, and succession.\n\nHindu Marriage Act 1955 applies to Hindus, Sikhs, Jains, and Buddhists. Grounds for divorce include cruelty, desertion, adultery, and mental disorder.\n\nMuslim personal law permits polygamy (up to 4 wives) subject to conditions. Triple Talaq was declared unconstitutional in 2017 (Shayara Bano v. Union of India).",
  },
  {
    id: 4n,
    title: "BNSS 2023 – Criminal Procedure (New Code)",
    subject: "BNS",
    description:
      "Study notes for Bharatiya Nagarik Suraksha Sanhita 2023 replacing CrPC. Covers arrest, bail, trial procedure.",
    syllabusOutline: [
      "Overview and replacement of CrPC",
      "Definitions and key terms",
      "FIR and Zero FIR provisions",
      "Arrest – rights of accused and procedure",
      "Bail provisions and conditions",
      "Cognizance of offences",
      "Trial procedure – Warrant, Summons, Summary trial",
      "Investigation and chargesheet",
      "Judgment and sentencing",
    ],
    keySections: [
      "Section 35 – Arrest by Police",
      "Section 480 – Bail",
      "Zero FIR",
      "Victim Compensation Scheme",
    ],
    notesContent:
      "BNSS 2023 replaces the Code of Criminal Procedure 1973 (CrPC). It introduces timelines for investigation, victim rights, and Zero FIR provisions.\n\nZero FIR allows any police station to register an FIR regardless of jurisdiction and then transfer it to the competent station. This removes the issue of police refusing to register FIR citing jurisdiction.\n\nThe new code mandates that investigation be completed within 180 days for offences punishable with death or life imprisonment.",
  },
  {
    id: 5n,
    title: "BSA 2023 – Evidence Law (New Code)",
    subject: "BNS",
    description:
      "Bharatiya Sakshya Adhiniyam 2023 replacing Indian Evidence Act. Covers digital evidence and burden of proof.",
    syllabusOutline: [
      "Overview replacing Indian Evidence Act 1872",
      "Relevancy of facts",
      "Oral and documentary evidence",
      "Electronic and digital evidence",
      "Witness examination",
      "Confessions and admissions",
      "Burden of proof",
      "Estoppel",
    ],
    keySections: [
      "Section 57 – Electronic Records",
      "Section 111 – Burden of Proof in rape cases",
      "Dying Declaration",
      "Confessions to police",
    ],
    notesContent:
      "BSA 2023 modernises evidence law in India by providing explicit recognition of electronic and digital records. It replaces the Indian Evidence Act 1872.\n\nElectronic records are now admissible as primary evidence (Section 57). Digital signatures, emails, CCTV footage, WhatsApp messages, and metadata are recognised forms of digital evidence.\n\nThe presumption of innocence until proven guilty remains the cornerstone of BSA 2023.",
  },

  // ── 10 NEW BNS Criminal Law Sections ───────────────────────────────────────
  {
    id: 6n,
    title: "BNS 2023 – Chapter I: General Provisions & Definitions",
    subject: "BNS",
    description:
      "Foundational chapter of Bharatiya Nyaya Sanhita 2023 covering definitions, commencement, and general explanations replacing IPC Sections 1-52A.",
    syllabusOutline: [
      "Short title, extent, and commencement",
      "Definition of 'person', 'document', 'valuable security'",
      "Definition of 'public servant'",
      "Definition of 'injury', 'life', 'animal'",
      "Explanation of 'act', 'omission', 'illegal'",
      "Definition of 'dishonestly', 'fraudulently'",
      "Definition of 'reason to believe'",
      "Gender and number in interpretation",
    ],
    keySections: [
      "Section 2 – Definitions",
      "Section 3 – Punishments",
      "Section 4 – Commutation of sentence",
      "Section 5 – Construction of references to IPC",
    ],
    notesContent:
      "Chapter I of BNS 2023 provides the foundational definitions replacing IPC Sections 1-52A.\n\nKey changes include updated definitions to reflect modern terminology, addition of 'organised crime' and 'terrorism' as concepts, and a revised punishment framework that includes community service as a new form of punishment.\n\nBNS 2023 came into force on 1 July 2024, officially replacing the Indian Penal Code 1860 which was in force for 163 years.",
  },
  {
    id: 7n,
    title: "BNS 2023 – Chapter II: General Exceptions",
    subject: "BNS",
    description:
      "Circumstances under which an act is not an offence — right of private defence, necessity, mistake of fact, and other exceptions.",
    syllabusOutline: [
      "Act done by a person bound by law",
      "Act of a Judge acting judicially",
      "Act done pursuant to order of superior",
      "Mistake of fact",
      "Accident in lawful act",
      "Act likely to cause harm done in good faith",
      "Consent",
      "Acts causing slight harm",
      "Right of Private Defence (body and property)",
      "Extent and limits of private defence",
    ],
    keySections: [
      "Section 34 – Act of Judge",
      "Section 36 – Mistake of fact",
      "Section 38 – Accident",
      "Sections 35-44 – Right of Private Defence",
    ],
    notesContent:
      "General Exceptions in BNS 2023 (replacing IPC Sections 76-106) define circumstances where an act, though harmful, does not constitute a criminal offence.\n\nRight of Private Defence is the most important general exception. Every person has the right to defend their own body and property and the body and property of others. This right does not extend to inflicting more harm than is necessary for defence.\n\nMistake of fact: An act done by a person who by reason of a mistake of fact honestly believes it to be justified by law is not an offence.",
  },
  {
    id: 8n,
    title: "BNS 2023 – Chapter III: Punishments",
    subject: "BNS",
    description:
      "Types of punishments under BNS 2023 — death, imprisonment, fine, forfeiture, and the new community service punishment.",
    syllabusOutline: [
      "Death sentence – application and review",
      "Imprisonment for life",
      "Rigorous and simple imprisonment",
      "Forfeiture of property",
      "Fine – quantum and recovery",
      "Community Service (new addition)",
      "Solitary confinement – limits",
      "Commutation of punishments",
      "Enhanced punishment for repeat offenders",
    ],
    keySections: [
      "Section 4 – Punishments",
      "Section 6 – Sentence of death",
      "Section 9 – Community Service",
      "Section 11 – Fine",
    ],
    notesContent:
      "BNS 2023 introduces community service as a new form of punishment — a significant departure from the IPC.\n\nCommunity service applies to minor offences like public intoxication, defamation, and similar low-grade offences. This is designed to rehabilitate first-time offenders without incarcerating them.\n\nDeath penalty is retained for the most serious offences including murder, gang rape of minors, and waging war against the state. The Supreme Court has held that death penalty can only be imposed in the 'rarest of rare' cases (Bachan Singh v. State of Punjab, 1980).",
  },
  {
    id: 9n,
    title: "BNS 2023 – Offences Against the State & National Security",
    subject: "BNS",
    description:
      "Sections on waging war, organised crime, terrorism, and acts threatening sovereignty of India — including the replacement of Sedition.",
    syllabusOutline: [
      "Waging war against Government of India",
      "Conspiring to overawe government by criminal force",
      "Sedition replaced by Section 152 – Acts endangering sovereignty",
      "Organised Crime (new section)",
      "Petty Organised Crime",
      "Terrorist Act under BNS",
      "Offences against public tranquillity",
      "Unlawful assembly and rioting",
    ],
    keySections: [
      "Section 147 – Waging War",
      "Section 152 – Acts threatening unity and integrity",
      "Section 111 – Organised Crime",
      "Section 113 – Terrorist Act",
    ],
    notesContent:
      "BNS 2023 makes a landmark change by replacing IPC Section 124A (Sedition) with Section 152 which criminalises acts endangering sovereignty, unity, and integrity of India.\n\nThe new provision is narrower than sedition — it targets acts that excite secession, armed rebellion, or subversive activities, rather than simply criticism of the government.\n\nOrganised Crime (Section 111) and Terrorist Act (Section 113) are added to the main penal code for the first time, incorporating provisions earlier scattered across special laws like UAPA and MCOCA.",
  },
  {
    id: 10n,
    title: "BNS 2023 – Offences Against Body: Murder & Culpable Homicide",
    subject: "BNS",
    description:
      "Section 99-106 of BNS covering murder, culpable homicide not amounting to murder, causing death by negligence.",
    syllabusOutline: [
      "Culpable Homicide – definition and ingredients",
      "Murder – definition and ingredients",
      "Distinction between murder and culpable homicide",
      "Exceptions reducing murder to culpable homicide",
      "Causing death by negligence",
      "Abetment of suicide",
      "Attempt to commit culpable homicide",
      "Sentence – death or life imprisonment",
    ],
    keySections: [
      "Section 99 – Culpable Homicide",
      "Section 100 – Murder",
      "Section 101 – Culpable Homicide not amounting to Murder",
      "Section 106 – Causing Death by Negligence",
    ],
    notesContent:
      "Murder (Section 100, BNS 2023 = old IPC Section 302) is punishable with death or life imprisonment.\n\nThe five exceptions that reduce murder to culpable homicide not amounting to murder are: (1) Grave and sudden provocation, (2) Exceeding private defence, (3) Public servant exceeding power in good faith, (4) Sudden fight without premeditation, (5) Consent of victim (mercy killing context).\n\nCausing death by negligence (Section 106) — a new provision adds enhanced punishment (up to 10 years) when death is caused by a medical practitioner due to negligence, addressing a major public concern.",
  },
  {
    id: 11n,
    title: "BNS 2023 – Offences Against Women & Children",
    subject: "BNS",
    description:
      "Critical chapter covering rape, sexual harassment, acid attack, trafficking, dowry death under BNS 2023.",
    syllabusOutline: [
      "Rape – definition, consent, and punishment",
      "Gang Rape provisions",
      "Sexual harassment and stalking",
      "Acid attack and voluntarily causing grievous hurt by acid",
      "Dowry Death (Section 80)",
      "Cruelty by husband / relatives",
      "Trafficking of persons (Section 143)",
      "Offences against children – kidnapping and abduction",
    ],
    keySections: [
      "Section 63 – Rape",
      "Section 70 – Gang Rape",
      "Section 75 – Sexual Harassment",
      "Section 80 – Dowry Death",
      "Section 143 – Trafficking",
    ],
    notesContent:
      "BNS 2023 strengthens protection for women and children. Rape is now defined under Section 63 (replacing IPC 375).\n\nThe definition of consent is explicitly clarified — consent must be unequivocal voluntary agreement communicated through words, gestures, or non-verbal communication. Silence does not amount to consent.\n\nGang Rape (Section 70) carries a minimum of 20 years to life imprisonment. Sexual intercourse with a woman under 18 years is rape regardless of consent (strict liability).\n\nDowry Death (Section 80) replaces IPC 304B — if a woman dies within 7 years of marriage due to burns, bodily injury, or under suspicious circumstances, and there is evidence of harassment for dowry, it is presumed to be dowry death.",
  },
  {
    id: 12n,
    title: "BNS 2023 – Offences Against Property",
    subject: "BNS",
    description:
      "Notes covering theft, robbery, dacoity, cheating, fraud, criminal breach of trust, extortion under BNS 2023.",
    syllabusOutline: [
      "Theft – definition and essential elements",
      "Extortion – definition and punishment",
      "Robbery and dacoity",
      "Criminal Misappropriation of property",
      "Criminal Breach of Trust",
      "Cheating – simple and aggravated",
      "Fraudulently obtaining property",
      "Mischief and criminal trespass",
    ],
    keySections: [
      "Section 303 – Theft",
      "Section 308 – Extortion",
      "Section 309 – Robbery",
      "Section 316 – Criminal Breach of Trust",
      "Section 318 – Cheating",
    ],
    notesContent:
      "Property offences under BNS 2023 largely retain the IPC structure but renumber the sections.\n\nTheft (Section 303) requires: (1) dishonest intention, (2) moveable property, (3) belonging to another, (4) taken out of possession of that person, (5) without consent.\n\nRobbery is aggravated theft — theft accompanied by voluntarily causing or attempting to cause death, hurt, or wrongful restraint. When five or more persons commit robbery, it becomes dacoity.\n\nNew provisions: Cyber fraud and digital property theft are now explicitly covered, reflecting the digital age.",
  },
  {
    id: 13n,
    title: "BNS 2023 – Abetment, Criminal Conspiracy & Attempt",
    subject: "BNS",
    description:
      "Study notes on abetment of offences, criminal conspiracy, and attempt to commit offences under BNS 2023.",
    syllabusOutline: [
      "Abetment – definition and modes (instigation, conspiracy, aid)",
      "Abetment in India of offences outside India",
      "Punishment for abetment",
      "Criminal Conspiracy – definition",
      "Conspiracy to commit cognizable offence",
      "Attempt to commit offence",
      "Attempt to commit murder",
      "Preparation vs. Attempt",
    ],
    keySections: [
      "Section 45 – Abetment",
      "Section 49 – Punishment of abetment if offence committed",
      "Section 61 – Criminal Conspiracy",
      "Section 62 – Punishment for criminal conspiracy",
    ],
    notesContent:
      "Abetment under BNS 2023 (Sections 45-60) covers three modes: instigation, conspiracy, and intentional aid.\n\nAbettor is liable for the same punishment as the principal offender in most cases. If the abetted act is not committed, punishment is lighter. Abetment of suicide is a specific offence (Section 108).\n\nCriminal Conspiracy (Section 61) requires agreement between two or more persons to do an illegal act or a legal act by illegal means. Even if the conspiracy is not acted upon, the agreement itself is the offence.\n\nPreparation vs. Attempt: Preparation is not punishable generally. Attempt is punishable — the test is whether the accused has taken steps that are immediately and not merely remotely connected with the commission of the offence.",
  },
  {
    id: 14n,
    title: "BNS 2023 – Offences Affecting Public Health & Decency",
    subject: "BNS",
    description:
      "Notes on public nuisance, obscenity, spread of disease, adulteration, and public health offences under BNS 2023.",
    syllabusOutline: [
      "Public nuisance – definition",
      "Negligent act likely to spread infection",
      "Making atmosphere noxious to health",
      "Adulteration of food and drugs",
      "Sale of noxious food or drink",
      "Obscenity – definition and punishment",
      "Sale / distribution of obscene material",
      "Obscene acts in public places",
    ],
    keySections: [
      "Section 270 – Negligent act spreading disease",
      "Section 271 – Disobedience of quarantine rule",
      "Section 292 – Sale of obscene books etc.",
      "Section 294 – Obscene acts and songs",
    ],
    notesContent:
      "BNS 2023 addresses public health offences including spreading of contagious diseases, adulteration of food and drugs, and obscenity.\n\nSection 270 criminalises negligent acts likely to spread infection of any disease dangerous to life. This provision gained renewed importance during COVID-19 when quarantine violations and spreading misinformation were prosecuted.\n\nAdulteration of food and drugs is a serious offence — if the adulteration causes hurt, it attracts imprisonment up to 6 years. If it causes death, the punishment extends to life imprisonment.\n\nObscenity law balances freedom of expression with public morality. The test for obscenity in India is the contemporary community standards test.",
  },
  {
    id: 15n,
    title: "BNS 2023 – Offences by & Relating to Public Servants",
    subject: "BNS",
    description:
      "Study notes on offences by public servants including misconduct, disobeying law, and false documentation under BNS 2023.",
    syllabusOutline: [
      "Public Servant – definition",
      "Public servant disobeying direction of law",
      "Framing incorrect document by public servant",
      "Public servant making illegal attachment",
      "Bribery – giving and taking",
      "Treating at elections and undue influence",
      "Personation at elections",
      "Offences relating to false evidence",
    ],
    keySections: [
      "Section 166 – Public servant disobeying law",
      "Section 167 – Public servant framing incorrect document",
      "Section 175 – Disobedience to summons",
      "Section 177 – Furnishing false information",
    ],
    notesContent:
      "BNS 2023 retains strong provisions against misconduct by public servants.\n\nA 'public servant' is broadly defined to include government officers, judges, members of armed forces, police officers, and persons employed in corporations controlled by government.\n\nSection 166 criminalises public servants who disobey any direction of law with intent to cause injury to any person. Section 167 criminalises preparing incorrect documents.\n\nThese sections work in conjunction with the Prevention of Corruption Act 1988 which provides additional penalties for corrupt public servants including disqualification from government service.",
  },
];
