import QueryString from "qs"
import {
  apiAllPostCommnetByType,
  apiGetAllListPost,
  apiGetAllTopicGuest,
  apiGetCategoryPost,
  apiGetDetailByG,
  apiGetListPostByCategoryPostID,
  apiGetListPostByTags,
  apiGetListPostRelate,
  apiGetListStaticNavbar,
  apiGetListTopicG,
  apiGetPostHome,
  apiGetRegionId,
  apiGetTopicByTypeGuest,
  apiGuestGetAllTopicPackage,
  apiGuestSendContact,
  apiGetListTopicPostHome,
  apiGetListVideo,
  apiGetDetailTopicPostHome,
  apiGetListBanner,
  apiGetGuestListImage,
  apiGetListCateImgeOther,
  apiGetListOrganizSystem,
  apiGuestGetAccountComboBox,
  apiGuestGetAllForCombobox,
  apiGuestGetListPositionForCombobox,
  apiGetListAgencyIssued,
  apiGetListDocumentType,
  apiGetListField,
} from "./apiRouter"
import http from "./index"
const guestGetAllTopicPackage = () => http.get(apiGuestGetAllTopicPackage)

const getDetail = body => {
  const params = QueryString.stringify(body)
  return http.get(`${apiGetDetailByG}?${params}`)
}

const getListPost = body => http.post(apiGetListPostByCategoryPostID, body)
const getAllTopic = () => http.post(apiGetAllTopicGuest)

const getListPostByTags = body => http.post(apiGetListPostByTags, body)
const getAllListPost = body => http.post(apiGetAllListPost, body)
const getStaticNav = params =>
  http.get(`${apiGetListStaticNavbar}?${QueryString.stringify(params)}`)
const sendContact = body => http.post(apiGuestSendContact, body)
const getPostHome = () => http.get(apiGetPostHome)
const getRegionById = params => http.get(apiGetRegionId, { params })
const getCategoryPost = () => http.get(apiGetCategoryPost)
const getListPostRelate = params => http.get(apiGetListPostRelate, { params })
const getTopicByType = () => http.get(apiGetTopicByTypeGuest)
const getListTopicG = () => http.get(apiGetListTopicG)
const getComment = body => {
  const params = QueryString.stringify(body)
  return http.get(`${apiAllPostCommnetByType}?${params}`)
}
const getPackage = body => http.post(apiGetDetailTopicPostHome, body)
const getListTopicPostHome = body => http.post(apiGetListTopicPostHome, body)
const getDetailTopicPostHome = params =>
  http.get(apiGetDetailTopicPostHome, { params })
const getListVideo = body => http.post(apiGetListVideo, body)
const getListBanner = params => http.get(apiGetListBanner, { params })
const getListImage = body => http.post(apiGetGuestListImage, body)
const getListCateImgeOther = body => http.post(apiGetListCateImgeOther, body)
const getListOrganizSystem = params =>
  http.get(apiGetListOrganizSystem, { params })
const guestGetAccountComboBox = () => http.get(apiGuestGetAccountComboBox)
const guestGetListPositionForCombobox = () =>
  http.get(apiGuestGetListPositionForCombobox)
const getListAgencyIssued = () => http.get(apiGetListAgencyIssued)
const getListDocumentType = () => http.get(apiGetListDocumentType)
const getListField = params => http.get(apiGetListField, { params })

const GuestServices = {
  getListPost,
  getStaticNav,
  getDetail,
  sendContact,
  getPostHome,
  getRegionById,
  getCategoryPost,
  getListPostRelate,
  getListPostByTags,
  getAllListPost,
  getAllTopic,
  getListTopicG,
  getTopicByType,
  getComment,
  guestGetAllTopicPackage,
  getPackage,
  getListTopicPostHome,
  getDetailTopicPostHome,
  getListVideo,
  getListBanner,
  getListImage,
  getListCateImgeOther,
  getListOrganizSystem,
  guestGetAccountComboBox,
  guestGetListPositionForCombobox,
  getListAgencyIssued,
  getListDocumentType,
  getListField,
}
export default GuestServices
