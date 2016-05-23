<template>
  <header class="header">
    <nav class="nav light-bar main-header" style="">
      <div class="nav-left">
        <span class="nav-toggle" onclick="toggleSideMenu()">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div class="nav-center">
        <a class="nav-item" href="https://github.com/JordanAssayah/MVM" target="_blank">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
          MVM
        </a>
      </div>
      <div class="nav-right nav-menu">
        <p class="control has-addons nav-item">
          <input class="input" type="text" placeholder="Search a node's name">
          <button class="button is-dark-light-mvm">
            <p>Search</p>
          </button>
        </p>
      </div>
    </nav>
  </header>
</template>

<style>
  .light-bar{
    border-bottom: solid 3px #4b4b4b;
  }
</style>
