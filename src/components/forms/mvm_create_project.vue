<template>
  <div class="column is-10 is-offset-2">
    <h1 class="title is-1 ">Project manager</h1>
  </div>
  <div class="column is-2 is-offset-2">
    <button class="button is-info is-fullwidth" v-on:click="toggleModalCreateProject">Create a new project</button>
    <br>
    <button class="button is-info is-fullwidth" v-on:click="toggleModalOpenProject">Open a project</button>
    <br>
    <button class="button is-danger is-fullwidth" v-on:click="toggleModalDeleteProject">Delete selected project(s)</button>
  </div>
  <div class="column is-6">
    <div class="box">
      <table class="table is-marginless">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Last Opened</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <mvm-checkbox></mvm-checkbox>
            </td>
            <td>Misty Abbott</td>
            <td>Bass Guitar</td>
          </tr>
          <tr>
            <td>
              <mvm-checkbox></mvm-checkbox>
            </td>
            <td>John Smith</td>
            <td>Rhythm Guitar</td>
          </tr>
          <tr>
            <td>
              <mvm-checkbox></mvm-checkbox>
            </td>
            <td>Robert Mikels</td>
            <td>Lead Guitar</td>
          </tr>
          <tr>
            <td>
              <mvm-checkbox></mvm-checkbox>
            </td>
            <td>Karyn Holmberg</td>
            <td>Drums</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="modal" id="create-project">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create project</p>
        <button class="delete" v-on:click="toggleModalCreateProject"></button>
      </header>
      <section class="modal-card-body">
        <label class="label">Name</label>
        <p class="control">
          <input class="input" type="text" placeholder="Text input">
        </p>

        <label class="label">Description</label>
        <p class="control">
          <input class="input" type="text" placeholder="Text input">
        </p>

        <label class="label">Local sounds folder</label>
        <p class="control has-addons">
          <input class="input" type="text" placeholder="Find a folder">
          <button class="button">
            Search
          </button>
        </p>

        <label class="label">Cloud name</label>
        <p class="control">
          <span class="select">
            <select>
              <option>Cloud name</option>
              <option>With options</option>
            </select>
          </span>
        </p>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-success">Save changes</a>
      </footer>
    </div>
  </div>

  <div class="modal" id="open-project">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" v-on:click="toggleModalOpenProject"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <a class="button is-primary">Save changes</a>
      </footer>
    </div>
  </div>

  <div class="modal" id="delete-project">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" v-on:click="toggleModalDeleteProject"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <a class="button is-primary">Save changes</a>
      </footer>
    </div>
  </div>


</template>

<script>
  import mvmCheckbox from './mvm_checkbox.vue'

  export default {
    components: { mvmCheckbox },
    methods: {
      toggleModalCreateProject: function () {
        document.querySelector('#create-project').classList.toggle('is-active')
      },
      toggleModalOpenProject: function () {
        document.querySelector('#open-project').classList.toggle('is-active')
      },
      toggleModalDeleteProject: function () {
        document.querySelector('#delete-project').classList.toggle('is-active')
      }
    }
  }
</script>
