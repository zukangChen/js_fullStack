- data 是组件自有数据，没有多少，思考会不会被共享，应用层共享的，只要多于一个组件要用，且关系不是简单的
  兄弟，就用vuex
- 共享状态，
vuex state 管 mutations 才能修改
              actions 被触发动作，提交mutations
              getters对state包装

    mapActions maoGetters 引入组件