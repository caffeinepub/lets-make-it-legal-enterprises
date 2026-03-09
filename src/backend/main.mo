import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";

actor {
  type Document = {
    id : Nat;
    name : Text;
    category : Text;
    description : Text;
    processSteps : [Text];
    requiredDocuments : [Text];
    estimatedTime : Text;
    feesInfo : Text;
  };

  type Service = {
    id : Nat;
    name : Text;
    category : Text;
    description : Text;
    processSteps : [Text];
    requiredDocuments : [Text];
    timeline : Text;
    pricingInfo : Text;
  };

  type StudyNote = {
    id : Nat;
    title : Text;
    subject : Text;
    description : Text;
    syllabusOutline : [Text];
    keySections : [Text];
    notesContent : Text;
  };

  let documents = Map.empty<Nat, Document>();
  let services = Map.empty<Nat, Service>();
  let studyNotes = Map.empty<Nat, StudyNote>();

  func seedData() {
    // Documents
    documents.add(
      1,
      {
        id = 1;
        name = "Aadhaar Card";
        category = "Identity";
        description = "Unique Identification document issued by the Government of India.";
        processSteps = ["Online application", "Document submission", "Biometric verification"];
        requiredDocuments = ["Proof of identity", "Proof of address"];
        estimatedTime = "2-3 weeks";
        feesInfo = "No fees";
      },
    );

    documents.add(
      2,
      {
        id = 2;
        name = "Passport";
        category = "Identity";
        description = "Official travel document issued by the government.";
        processSteps = ["Online application", "Document verification", "Interview"];
        requiredDocuments = ["Aadhaar Card", "Address Proof"];
        estimatedTime = "3 weeks";
        feesInfo = "INR 1,500";
      },
    );

    // Services
    services.add(
      1,
      {
        id = 1;
        name = "Trademark Registration";
        category = "Legal";
        description = "Register your logo/brand identity.";
        processSteps = ["Online process", "Due diligence", "Filing", "TM allotment"];
        requiredDocuments = ["Business proof", "Brand logo", "Applicant ID proof"];
        timeline = "1-2 days";
        pricingInfo = "INR 4,500";
      },
    );

    services.add(
      2,
      {
        id = 2;
        name = "Pvt Ltd Company Registration";
        category = "Legal";
        description = "Register your startup as a private limited company.";
        processSteps = ["DIN/DSC generation", "Name approval", "Document submission"];
        requiredDocuments = ["PAN Card", "Address Proof", "Photograph"];
        timeline = "15-20 days";
        pricingInfo = "INR 8,500";
      },
    );

    // Study Notes
    studyNotes.add(
      1,
      {
        id = 1;
        title = "Introduction to Indian Constitution";
        subject = "Constitution of India";
        description = "Foundational notes on the Indian Constitution - structure, history, and importance.";
        syllabusOutline = [
          "Historical context",
          "Preamble",
          "Key provisions",
        ];
        keySections = ["Preamble", "Fundamental Rights"];
        notesContent = "The Constituent Assembly of India set up the new unitary system for lawmaking...";
      },
    );

    studyNotes.add(
      2,
      {
        id = 2;
        title = "BNS 2023/2024/2025 Key Changes";
        subject = "Law";
        description = "Comparison between IPC and BNS (Bharatiya Nagarik Suraksha Sanhita).";
        syllabusOutline = ["Legal reforms", "Procedure amendments"];
        keySections = [];
        notesContent = "BNSS covers legal reforms under the criminal procedure act...";
      },
    );
  };

  seedData();

  module Document {
    public func compare(document1 : Document, document2 : Document) : Order.Order {
      Text.compare(document1.name, document2.name);
    };
  };
  module Service {
    public func compare(service1 : Service, service2 : Service) : Order.Order {
      Text.compare(service1.category, service2.category);
    };
  };

  module StudyNote {
    public func compare(studyNote1 : StudyNote, studyNote2 : StudyNote) : Order.Order {
      Text.compare(studyNote1.title, studyNote2.title);
    };
  };

  public query ({ caller }) func listDocuments() : async [Document] {
    documents.values().toArray().sort();
  };

  public query ({ caller }) func listServices() : async [Service] {
    services.values().toArray().sort();
  };

  public query ({ caller }) func listStudyNotes() : async [StudyNote] {
    studyNotes.values().toArray().sort();
  };

  public query ({ caller }) func getDocumentById(id : Nat) : async Document {
    switch (documents.get(id)) {
      case (null) { Runtime.trap("Document does not exist") };
      case (?document) { document };
    };
  };

  public query ({ caller }) func getServiceById(id : Nat) : async Service {
    switch (services.get(id)) {
      case (null) { Runtime.trap("Document does not exist") };
      case (?service) { service };
    };
  };

  public query ({ caller }) func getStudyNoteById(id : Nat) : async StudyNote {
    switch (studyNotes.get(id)) {
      case (null) { Runtime.trap("Document does not exist") };
      case (?studyNote) { studyNote };
    };
  };

  public query ({ caller }) func filterDocumentsByCategory(category : Text) : async [Document] {
    let results = documents.values().toArray().filter(
      func(d) {
        Text.equal(d.category, category);
      }
    );
    results;
  };

  public query ({ caller }) func filterServicesByCategory(category : Text) : async [Service] {
    let results = services.values().toArray().filter(
      func(s) {
        Text.equal(s.category, category);
      }
    );
    results;
  };

  public query ({ caller }) func searchStudyNotesByKeyword(keyword : Text) : async [StudyNote] {
    let results = studyNotes.values().toArray().filter(
      func(n) {
        n.title.contains(#text keyword) or n.subject.contains(#text keyword) or n.description.contains(#text keyword);
      }
    );
    results;
  };
};
