import BasicLayout from "../layouts/BasicLayout";
import User from "../routes/User/User";
import UserPermission from "../routes/User/UserPermission";
import UserContact from "../routes/User/UserContact";
import ExternalParty from "../routes/ExternalParty/ExternalParty";
import ExternalPartyContact from "../routes/ExternalParty/ExternalPartyContact";
import PaymentSystem from "../routes/PaymentSystem/PaymentSystem";
import PaymentSystemSummary from "../routes/PaymentSystem/PaymentSystemSummary";
import PaymentSystemTransaction from "../routes/PaymentSystem/PaymentSystemTransaction";
import PaymentSystemTransactionCategory from "../routes/PaymentSystem/PaymentSystemTransactionCategory";

const data = [
  {
    children: [
      {
        children: [
          {
            component: User,
            name: "Manage",
            path: "",
            key:"AS"
          },
          {
            component: UserPermission,
            name: "Permissions",
            path: "permissions"
          },
          {
            component: UserContact,
            name: "Contacts",
            path: "contacts"
          }
        ],
        icon: "user",
        name: "Users",
        path: "users"
      },
      {
        children: [
          {
            component: ExternalParty,
            name: "Manage",
            path: ""
          },
          {
            component: ExternalPartyContact,
            name: "Contacts",
            path: "contacts"
          }
        ],
        icon: "team",
        name: "External Parties",
        path: "external-parties"
      },
      {
        children: [
          {
            component: PaymentSystem,
            name: "Manage",
            path: ""
          },
          {
            component: PaymentSystemTransaction,
            name: "Transactions",
            path: "transaction"
          },
          {
            component: PaymentSystemTransactionCategory,
            name: "Categories",
            path: "categories"
          },
          {
            component: PaymentSystemSummary,
            name: "Summary",
            path: "summary"
          }
        ],
        icon: "bank",
        name: "Payment Systems",
        path: "payment-systems"
      }
    ],
    component: BasicLayout,
    layout: "BasicLayout",
    name: "Home",
    path: ""
  }
];

export function getNavData () {
  return data;
}

export default data;
