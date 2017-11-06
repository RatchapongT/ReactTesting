import _ from "lodash";
import {
  requestActivateUserById,
  requestCreateUser
  //requestDeactivateUserById,
  //requestGetUserByUsername,
  //requestGetUsers,
  //requestRecoverUserById,
  //requestRemoveUserById,
  //requestUpdateUserAccountTypeById,
  //requestUpdateUserById,
  //requestUpdateUserLanguageById,
  //requestUpdateUserPasswordById,
  //requestUpdateUserUsernameById
} from "../services/users/users";

export default {
  effects: {
    * activateUserById ({ payload }, { call, put }) {
      yield put({
        payload: {
          loading: true,
          objectId: payload.objectId
        },
        type: "updateUserActivating"
      });
      yield call(requestActivateUserById, payload);
      yield put({
        payload: {
          loading: false,
          objectId: payload.objectId
        },
        type: "updateUserActivating"
      });
    },
    * createUser ({ payload }, { call, put }) {
      yield put({
        payload: true,
        type: "updateUserCreating"
      });
      const response = yield call(requestCreateUser, payload);
      console.log(response);
      yield put({
        payload: false,
        type: "updateUserCreating"
      });
    },
    //* deactivateUserById (_, { call, put }) {
    //
    //},
    //* getUserByUsername (_, { call, put }) {
    //
    //},
    * getUsers (_, { call, put }) {

    },
    //* recoverUserById (_, { call, put }) {
    //
    //},
    //* removeUserById (_, { call, put }) {
    //
    //},
    //* updateUserAccountTypeById (_, { call, put }) {
    //
    //},
    //* updateUserById (_, { call, put }) {
    //
    //},
    //* updateUserLanguageById (_, { call, put }) {
    //
    //},
    //* updateUserPasswordById (_, { call, put }) {
    //
    //},
    //* updateUserUsernameById (_, { call, put }) {
    //
    //}
  },

  namespace: "users",

  reducers: {
    updateUserActivating (state, action) {
      const { objectId, loading } = action.payload;
      return {
        ...state,
        userActivating: {
          ...state.userActivating,
          [objectId]: loading
        }
      };
    },
    updateUserCreating (state, action) {
      return {
        ...state,
        userCreating: action.payload
      };
    }
  },

  state: {
    list: [],
    user: null,
    userActivating: {},
    userCreating: false,
    userListLoading: false
  }
};
