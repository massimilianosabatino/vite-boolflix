<script>
import { store } from '../store';
export default {
  props: {
    show: Boolean,
    info: Object,
    poster: String,
  },
  data(){
    return {
      store,
    }
  },
  computed: {
    getGenres(){
      const genreName = this.store.genresMovie.filter(genre => this.info.genre_ids.includes(genre.id));
      return genreName;
    }
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" @click.self="$emit('close')">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">

          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <div class="poster">
              <img :src="poster" alt="">
            </div>
            <div class="info">
              <h3>{{ info.title || info.name }}</h3>
              <h4>
                {{ info.original_title || info.original_name }}
              </h4>
              <div class="overview">
                <h3>Sinossi</h3>
                <p>{{ info.overview }}</p>
              </div>
              <div class="details">
                <div class="genres">
                  <ul>
                    <li v-for="genre in getGenres">{{ genre.name }}</li>
                  </ul>
                </div>
              </div>
            </div>

          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
            <button
              class="modal-default-button"
              @click="$emit('close')"
            >OK</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@use './../assets/sass/components/card-modal-component';
</style>