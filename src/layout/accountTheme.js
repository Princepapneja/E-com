import AccountHeader from "../components/header-footer/accountHeader"

const DashboardTheme = ({pageContent}) => {
  return (
    <>
      <AccountHeader />
      {pageContent}
</>
  )
}

export default DashboardTheme;