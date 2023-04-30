import { UserOutlined } from "@ant-design/icons"
import { Avatar, Empty, Input, Modal, Spin, Tabs, Tooltip } from "antd"
import { useState, useContext } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "src/lib/store"
import SvgIcon from "src/components/SvgIcon"
import NotifyApi from "src/services/Notify"
import {
  changeAccountIdInNotify,
  changePackageIdInNotify,
  changeDetailTabInNotify,
  changeVoteOfBusiness,
} from "src/redux/package"
import {
  changeRequestIdInNotify,
  changeRequestTabInNotify,
} from "src/redux/requestOrder"
import { WrapNotify, WrapNotifyItem } from "./styled"

const NotifyForm = ({ listNotify, loading, getList, onClose }) => {
  const { userStore } = useContext(StoreContext)
  const [user] = userStore
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isloading, setLoading] = useState(false)
  const onSearch = textSearch => {
    getList(textSearch)
  }

  const handleReadAll = () => {
    setLoading(true)
    NotifyApi.MarkAsRead("")
      .then(res => {
        if (res?.isOk) {
          getList("")
        }
      })
      .finally(() => setLoading(false))
  }

  const handleDeleteAll = () => {
    onClose()
    Modal.confirm({
      title: "Bạn có chắc chắn muốn xóa tất cả thông báo không?",
      okText: "Xác nhận",
      width: 500,
      bodyStyle: { left: 20 },
      cancelText: "Hủy",
      onOk: () => {
        setLoading(true)
        NotifyApi.DeleteNotifyForUser("")
          .then(res => {
            if (res?.isOk) {
              getList("")
            }
          })
          .finally(() => setLoading(false))
      },
    })
  }

  const handleClick = notify => {
    setLoading(true)
    NotifyApi.MarkAsRead(notify?.NotifyId)
      .then(res => {
        if (res?.isOk) {
          getList("")
        }
      })
      .finally(() => setLoading(false))
    onClose()
    switch (notify?.Type) {
      case 1:
        dispatch(changeRequestIdInNotify(notify?.ReferenceId))
        navigate("/danhsachphieu")
        break
      case 2:
        dispatch(changeRequestIdInNotify(notify?.ReferenceId))
        navigate("/ho-so-suc-khoe")
        break
      case 3:
        dispatch(changeRequestIdInNotify(notify?.ReferenceId))
        dispatch(changeRequestTabInNotify("3"))
        navigate("/ho-so-suc-khoe")
        break
      case 4:
        navigate(`/danhsachphieu/ketqua/${notify.ReferenceId}`)
        break
      case 5:
        navigate(`/ho-so-suc-khoe/${notify.ReferenceId}/${user?.token?.userID}`)
        break
      case 6:
        dispatch(changeRequestIdInNotify(notify?.ReferenceId))
        navigate("/ho-so-suc-khoe")
        break
      case 7:
        dispatch(changeAccountIdInNotify(notify?.ReferenceId))
        dispatch(changeVoteOfBusiness(1))
        navigate("/ho-so-suc-khoe")
        break
      case 8:
        dispatch(changeAccountIdInNotify(notify?.ReferenceId))
        dispatch(changeVoteOfBusiness(2))
        navigate("/ho-so-suc-khoe")
        break
      case 9:
        dispatch(changePackageIdInNotify(notify?.ReferenceId))
        dispatch(changeDetailTabInNotify("4"))
        navigate("/goi-kham")
        break
      case 10:
        dispatch(changeRequestIdInNotify(notify?.ReferenceId))
        dispatch(changeRequestTabInNotify("6"))
        navigate("/ho-so-suc-khoe")
        break
      default:
        break
    }
  }

  return (
    <WrapNotify>
      <Spin spinning={loading || isloading}>
        <div className="container">
          <div className="header-notify">
            <div className="title">Thông báo</div>
            <div className="link-name d-flex" onClick={handleReadAll}>
              Đánh dấu đã đọc <SvgIcon name="checks" className="icon" />
            </div>
          </div>
          <Input.Search
            placeholder="Tìm kiếm"
            onSearch={onSearch}
            enterButton
          />
          <div className="wrap-tabs">
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane
                tab={`Tất cả (${!!listNotify ? listNotify?.length : 0})`}
                key="1"
              >
                <div className="body-notify">
                  {(!!listNotify ? listNotify?.length : 0) > 0 ? (
                    listNotify?.map(notify => (
                      <NotifyItem
                        notify={notify}
                        key={notify?.NotifyId}
                        handleClick={() => handleClick(notify)}
                      />
                    ))
                  ) : (
                    <Empty
                      description={"Chưa có thông báo nào!"}
                      style={{ paddingBottom: 24 }}
                    />
                  )}
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={`Chưa đọc (${
                  !!listNotify
                    ? listNotify?.filter(notify => !notify?.IsRead)?.length
                    : []
                })`}
                key="2"
              >
                <div className="body-notify">
                  {(!!listNotify
                    ? listNotify.filter(notify => !notify?.IsRead)?.length
                    : 0) > 0 ? (
                    listNotify
                      ?.filter(notify => !notify?.IsRead)
                      ?.map(notify => (
                        <NotifyItem
                          notify={notify}
                          key={notify?.NotifyId}
                          handleClick={() => handleClick(notify)}
                        />
                      ))
                  ) : (
                    <Empty
                      description={"Chưa có thông báo nào!"}
                      style={{ paddingBottom: 24 }}
                    />
                  )}
                </div>
              </Tabs.TabPane>
            </Tabs>
          </div>
          {(!!listNotify ? listNotify?.length : 0) > 0 && (
            <div className="footer-notify link-name" onClick={handleDeleteAll}>
              <span>Xoá tất cả</span>
            </div>
          )}
        </div>
      </Spin>
    </WrapNotify>
  )
}
export default NotifyForm

const NotifyItem = ({ notify, handleClick }) => {
  return (
    <WrapNotifyItem
      className={!notify?.IsRead ? "unread" : ""}
      onClick={handleClick}
    >
      <div className="avatar">
        <Avatar
          size={32}
          src={notify?.Logo}
          icon={<UserOutlined style={{ fontSize: "16px" }} />}
        />
      </div>
      <div className="content-notify">
        <div className="hidden-text">
          <span className="account-name">{notify?.Title}:</span>
          <br />
          <Tooltip title={`${notify?.AccountName} - ${notify?.Content}`}>
            <span className="account-name">{notify?.AccountName}</span>{" "}
            <span>{notify?.Content?.split(": ")[0]}</span>{" "}
            <span className="package-name">
              {notify?.Content?.split(":")[1] || notify?.PackageName}
            </span>
          </Tooltip>
        </div>
        <div className="time"> {notify?.TimeAgo}</div>
      </div>
    </WrapNotifyItem>
  )
}
