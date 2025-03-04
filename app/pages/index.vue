<script lang="ts" setup>

const years = ref([
        {
          color: 'cyan',
          year: '1998',
          title: '',
          text: 'aboutDescription.born.'
        },
        {
          color: 'green',
          year: '1970',
        },
        {
          color: 'pink',
          year: '1980',
        },
        {
          color: 'amber',
          year: '1990',
        },
        {
          color: 'orange',
          year: '2000',
        },
      ]);

</script>

<template>
  <v-container height="80svh">
    <v-row no-gutters class="h-100">
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="d-block w-100">
          <div class="text-h1 text-primary font-weight-bold">Lucas Rodrigues</div>
          <div>Desenvolvedor Web</div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <CmdCard>
          <v-card max-height="250px">
            <v-card-title> DEBUG </v-card-title>
            <HomeObject></HomeObject>
          </v-card>
          <v-progress-circular
            color="primary"
            class="ma-5"
            indeterminate
            :size="113"
            :width="12"
          ></v-progress-circular>
        </CmdCard>
      </v-col>
    </v-row>
  </v-container>
  <v-divider></v-divider>
  <v-card color="black" rounded="0">
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-card class="mt-2">
            <v-img src="/assets/image/lucas-1-nobg.webp" :max-width="325"></v-img>
          </v-card>
        </v-col>
        <v-col cols="9">
          <v-card-title class="text-primary">{{ $t('aboutDescription') }}</v-card-title>
          <v-card-text>
            Donec viverra dolor eget magna fringilla egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, ex at sagittis posuere, magna arcu efficitur orci, et pulvinar magna ipsum quis massa. Morbi sagittis sit amet odio vel sollicitudin. Aliquam nulla mi, scelerisque vitae suscipit eu, bibendum sit amet orci. Suspendisse interdum, mauris eget porttitor feugiat, arcu turpis pellentesque lorem, nec posuere metus diam nec justo. Integer eros nisl, fermentum vel sem maximus, tincidunt consectetur orci. Cras malesuada pellentesque mi.
          </v-card-text>

          <v-card-text>
            Donec consequat in turpis non maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum porttitor arcu et tellus porttitor viverra. Vivamus at tortor lobortis, aliquam massa at, fringilla elit. Suspendisse potenti. Maecenas vitae tellus vehicula, aliquet nisi et, consequat felis. Vestibulum condimentum, velit ac tempor facilisis, erat mauris molestie est, vel semper turpis magna id tellus. Cras sit amet ultricies arcu, vitae tempus leo. Sed porta pulvinar accumsan. Etiam eget imperdiet nisl.
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <v-divider></v-divider>
  <v-container class="pt-0">
    <v-timeline align="start">
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :dot-color="year.color"
        size="small"
      >
        <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold text-${year.color}`"
            v-text="year.year"
          ></div>
        </template>
        <div>
          <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
            Lorem ipsum
          </h2>
          <div>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>

  <
</template>


<style scoped>


</style>
