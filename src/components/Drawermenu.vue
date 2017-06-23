<template>
  <q-layout>
    <div slot="header" class="toolbar">

      <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
        <i>menu</i>
      </button>

      <q-toolbar-title :padding="1">
        DrawerMenu
      </q-toolbar-title>
    </div>


    <!--
    <q-tabs slot="navigation">
      <q-tab icon="mail" route="/layout" exact replace>Mails</q-tab>
      <q-tab icon="alarm" route="/layout/alarm" exact replace>Alarms</q-tab>
      <q-tab icon="help" route="/layout/help" exact replace>Help</q-tab>
    </q-tabs>
    -->



    <q-drawer ref="drawer">
      <div class="toolbar">
        <q-toolbar-title>
          Tendgo
        </q-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <q-drawer-link icon="mail" :to="{path: '/', exact: true}">
          Home
        </q-drawer-link>
        <q-drawer-link icon="spellcheck" :to="{path: '/Error', exact: true}">
          Error
        </q-drawer-link>
        <q-drawer-link icon="spellcheck" :to="{path: '/drawermenu/random-word', exact: true}">
          Random
        </q-drawer-link>
        <q-drawer-link icon="spellcheck" :to="{path: '/menu', exact: true}">
          Menu
        </q-drawer-link>
        <q-drawer-link icon="spellcheck" :to="{path: '/drawermenu', exact: true}">
          Drawer
        </q-drawer-link>
        <q-drawer-link icon="spellcheck" :to="{path: '/drawermenu/things', exact: true}">
          Things
        </q-drawer-link>

      </div>
    </q-drawer>


    <router-view class="layout-view"></router-view>



  </q-layout>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
.homepage{
background: url(/statics/images/bg.jpg) no-repeat center center;
background-attachment:fixed;
-webkit-background-size: 100%;
-moz-background-size: 100%;
-o-background-size: 100%;
background-size: 100%;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
}
</style>
