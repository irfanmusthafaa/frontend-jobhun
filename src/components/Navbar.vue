<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
      <div class="container-fluid">
        <a class="navbar-logo" href="#"> TVMaze </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
            <li class="nav-item my-auto">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item my-auto">
              <a class="nav-link" href="#">Movies</a>
            </li>
            <li class="nav-item my-auto">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item my-auto">
              <a class="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" href="#" role="button">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
