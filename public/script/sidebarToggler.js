$(function () {
    const openBar = $("#toggleOpenSidebar")
    const closeBar = $("#toggleCloseSidebar")
    const sidebar = $("#sidebarHRIS")

    openBar.click(function () {
        sidebar.toggleClass("hidden")
    })
    closeBar.click(function () {
        sidebar.toggleClass("hidden")
    })
})