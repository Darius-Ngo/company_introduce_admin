import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  //Notification
  accountIdInNotify: '',
  packageIdInNotify: '',
  tabInNotify: '1',
  voteOfBusiness: 1,

  information: {},
  listServiceChecked: [],
  listCompanyChecked: [],
  listCompany: [],
  listImg: [],

  //Register package
  changeServiceUpdate: false,
  RequestIdNew: '',
  listServiceOfGroup: [],
  listExaminationFiltered: [],
  listAllExamination: [],
  listExaminationAdditionalId: [],
  listGroup: [],
  dataStep2: {
    listGroupId: [],
    listDeptId: [],
    listUserId: [],
    typeSelect: 1
  }
}

export const packageSlice = createSlice({
  name: 'package',
  initialState,
  reducers: {
    changeAccountIdInNotify: (state, action) => {
      state.accountIdInNotify = action.payload
    },
    changeVoteOfBusiness: (state, action) => {
      state.voteOfBusiness = action.payload
    },
    changePackageIdInNotify: (state, action) => {
      state.packageIdInNotify = action.payload
    },
    changeDetailTabInNotify: (state, action) => {
      state.tabInNotify = action.payload
    },

    getInformation: (state, action) => {
      state.information = action.payload
    },

    getFileImg: (state, action) => {
      state.listImg = action.payload
    },

    getListServiceChecked: (state, action) => {
      state.listServiceChecked = action.payload
    },

    getListCompany: (state, action) => {
      state.listCompany = action.payload
    },

    getlistCompanyChecked: (state, action) => {
      state.listCompanyChecked = action.payload
    },

    //Register package
    setChangeServiceUpdate: (state, action) => {
      state.changeServiceUpdate = action.payload
    },
    changeRequestIdNew: (state, action) => {
      state.RequestIdNew = action.payload
    },
    changeListServiceOfGroup: (state, action) => {
      state.listServiceOfGroup = action.payload
    },
    changeListExaminationFiltered: (state, action) => {
      state.listExaminationFiltered = action.payload
    },
    changeListAllExamination: (state, action) => {
      state.listAllExamination = action.payload
    },
    changeListExaminationAdditionalId: (state, action) => {
      state.listExaminationAdditionalId = action.payload
    },
    changeDataStep2: (state, action) => {
      state.dataStep2 = action.payload
    },
    resetData: state => {
      state.dataStep2 = {
        listGroupId: [],
        listDeptId: [],
        listUserId: [],
        typeSelect: 1
      }
      state.RequestIdNew = ''
      state.listServiceOfGroup = []
      state.listExaminationAdditionalId = []
      state.listExaminationFiltered = []
      state.changeServiceUpdate = false
    }
  }
})

export const {
  changeAccountIdInNotify,
  changePackageIdInNotify,
  changeDetailTabInNotify,
  changeVoteOfBusiness,

  getInformation,
  getFileImg,
  getListServiceChecked,
  getListCompany,
  getlistCompanyChecked,

  setChangeServiceUpdate,
  changeRequestIdNew,
  changeListServiceOfGroup,
  changeListExaminationFiltered,
  changeListAllExamination,
  changeListExaminationAdditionalId,
  changeDataStep2,
  resetData
} = packageSlice.actions

export default packageSlice.reducer
