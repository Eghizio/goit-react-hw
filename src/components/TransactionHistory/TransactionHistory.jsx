import css from "./TransactionHistory.module.css";
import { clsx } from "../../utils";

const Cell = ({ children, align = "center" }) => (
  <td className={css.cell} style={{ textAlign: align }}>
    {children}
  </td>
);

const HeaderCell = ({ children }) => (
  <th className={clsx(css.cell, css.header)}>{children}</th>
);

export const TransactionHistory = ({ items }) => (
  <table className={css.table}>
    <thead>
      <tr>
        <HeaderCell>Type</HeaderCell>
        <HeaderCell>Amount</HeaderCell>
        <HeaderCell>Currency</HeaderCell>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <Cell align="left">
            <span className={css.type}>{type}</span>
          </Cell>
          <Cell>{amount}</Cell>
          <Cell>{currency}</Cell>
        </tr>
      ))}
    </tbody>
  </table>
);
