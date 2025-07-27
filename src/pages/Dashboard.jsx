import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import StatusTracker from "../components/StatusTracker";
import TaskList from "../components/TaskList";
import AlertsPanel from "../components/AlertsPanel";
import DocumentUpload from "../components/DocumentUpload";
import SupportTickets from "../components/SupportTickets";

const dataByRole = {
  Applicant: {
    status: 1,
    tasks: [
      { label: "Complete personal info", status: "Done" },
      { label: "Upload Passport Scan", status: "Pending" },
      { label: "Pay Application Fee", status: "Pending" },
    ],
    alerts: ["Your application draft is pending review.", "Photo upload is missing."],
  },
  Paralegal: {
    status: 2,
    tasks: [
      { label: "Review applicant's form", status: "Pending" },
      { label: "Request missing documents", status: "Pending" },
    ],
    alerts: ["Deadline for USCIS filing: 10 days left."],
  },
  Attorney: {
    status: 3,
    tasks: [
      { label: "Approve client’s O-1 packet", status: "Pending" },
      { label: "Sign recommendation letter", status: "Done" },
    ],
    alerts: [],
  },
  Admin: {
    status: 1,
    tasks: [
      { label: "Approve new paralegal accounts", status: "Pending" },
    ],
    alerts: ["2 user registrations pending."],
  },
};

export default function Dashboard({ role, setRole }) {
  const data = dataByRole[role];
  return (
    <DashboardLayout role={role} setRole={setRole}>
      <StatusTracker currentStage={data.status}/>
      <AlertsPanel alerts={data.alerts} />
      <TaskList tasks={data.tasks} />
      <DocumentUpload />
      <SupportTickets/>
    </DashboardLayout>
  );
}
