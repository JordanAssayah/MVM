<template>
  <div class="column is-6 is-offset-3">
    <h1 class="title is-1 ">Project manager</h1>
  </div>
  <div class="column is-6 is-offset-3">
    <div class="box">
      <p class="control" >
        <button class="button is-info" v-on:click="toggleModalCreateProject">
          Create a new project
        </button>
        <button class="button is-info" v-on:click="toggleModalOpenProject">
          Open a project
        </button>
        <button class="button is-danger" v-on:click="toggleModalDeleteProject">
          Delete selected project(s)
        </button>
      </p>
    </div>
  </div>
  <div class="column is-6 is-offset-3">

    <div class="box">
      <table class="table is-marginless">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>
              Description
            </th>
            <th>
              Cloud name
            </th>
            <th>Last Opened</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <mvm-checkbox></mvm-checkbox>
            </td>
            <td>
              rgwergewrg
            </td>
            <td>
              sergewergwerg
            </td>
            <td>Misty Abbott</td>
            <td>Bass Guitar</td>
          </tr>
          <tr>
            <td>
              <mvm-checkbox></mvm-checkbox>
            </td>
            <td>
              rgwergewrg
            </td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </td>
            <td>John Smith</td>
            <td>Rhythm Guitar</td>
          </tr>
          <tr>
            <td>
              <mvm-checkbox></mvm-checkbox>
            </td>
            <td>
              rgwergewrg
            </td>
            <td>
              sergewergwerg
            </td>
            <td>Robert Mikels</td>
            <td>Lead Guitar</td>
          </tr>
          <tr>
            <td>
              <mvm-checkbox></mvm-checkbox>
            </td>
            <td>
              lorem
            </td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
          <button class="button is-dark-mvm">
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
