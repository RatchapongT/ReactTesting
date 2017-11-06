import React, { PureComponent } from "react";
import { connect } from "dva";

import PageHeaderLayout from "../../layouts/PageHeaderLayout";

@connect(state => ({
  users: state.users
}))
export default class PaymentSystemTransactionCategory extends PureComponent {
  componentDidMount () {
    this.props.dispatch({
      type: "users/getUsers"
    });
  }

  render () {
    const { users } = this.props;
    const { list } = users;

    return (
      <PageHeaderLayout>
        <div>
          {list}
        </div>
      </PageHeaderLayout>
    );
  }
}
