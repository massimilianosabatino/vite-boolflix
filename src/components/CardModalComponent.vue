<script>
import axios from 'axios';
import { DateTime } from "luxon";
import { store } from '../store';
export default {
  props: {
    show: Boolean,
    info: Object,
    poster: String,
    cast: Array,
  },
  data(){
    return {
      store,
      moreCast: false,
    }
  },
  computed: {
    getGenres(){
            //Create array of unique id
            this.store.genres = Array.from(new Set(this.store.tempG.map(g => g.id)))
                //Returns the object corresponding to the id
                .map(id => this.store.tempG.find(g => g.id === id));
      //Returns only those included in the media object
      const genreName = this.store.genres.filter(genre => this.info.genre_ids.includes(genre.id));
      return genreName;
    },
    convertDate(){
      return DateTime.fromFormat(this.info.release_date, 'yyyy-LL-dd').toFormat('dd-LL-yyyy')
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
            <div class="menu">
              <div class="back" @click="$emit('close')">
                <img src="./../assets/img/arrow-back.png" alt="back">
              </div>
            </div>
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
                <div class="cast">
                  <h3>CAST</h3>
                  <ul>
                    <template v-for="(actor, index) in cast">
                      <!-- <li v-for="actor in cast">{{ actor.name }}</li> -->
                      <li v-if="index < 5 && !moreCast">{{ actor.name }}</li>
                      <li v-else-if="moreCast">{{ actor.name }}</li>
                    </template>
                    <h4 v-if="!moreCast" @click="moreCast = !moreCast">more..</h4>
                    <h4 v-else-if="moreCast" @click="moreCast = !moreCast">less..</h4>
                  </ul>
                </div>
              </div>
            </div>

          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <span>Data di uscita: {{ convertDate }}</span>
            <button
              class="modal-default-button"
              @click="$emit('close')"
            >CHIUDI</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@use './../assets/sass/components/card-modal-component';
</style>