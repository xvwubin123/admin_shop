import axios from 'axios'
/* eslint-disable */
export default {
  data() {
    return {
      tableData: [
        {
          username: '王小虎',
          mobile: '12121211212',
          email: '212121'
        }
      ],
      value3: true,
      total: 0,
      currentnum: 1,
      searchText: ''
    }
  },
  created() {
    this.logUsersData()
  },
  methods: {
    changeCurPage(curpage) {
      console.log(curpage)
      this.logUsersData(curpage, this.searchText)
    },
    logUsersData(pagenum = 1, query = '') {
      axios
        .get('http://localhost:8888/api/private/v1/users', {
          params: {
            query,
            pagenum,
            pagesize: 2
          },
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        .then(res => {
          console.log(res)
          this.tableData = res.data.data.users
          this.total = res.data.data.total
          this.currentnum = res.data.data.pagenum
        })
    },
    startquery() {
      this.logUsersData(1, this.searchText)
    }
  }
}