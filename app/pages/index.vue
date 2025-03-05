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

const social =  {
  'whatsapp': {
    icon: 'mdi-whatsapp',
    color: 'success',
    label: 'message',
    value: 'nada'
  },
  'copy-link': {
    icon: 'mdi-content-copy',
    color: 'blue-grey-lighten-1',
    label: 'copyLink',
    value: 'nada'
  },
  'email': {
    icon: 'mdi-email',
    color: 'red-darken-3',
    label: 'email',
    value: 'nada'
  },
  'github': {
    icon: 'mdi-github',
    color: 'black',
    label: 'github',
    value: 'nada'
  },
  'linkedin': {
    icon: 'mdi-linkedin',
    color: 'blue',
    label: 'linkedin',
    value: 'nada'
  },
  'instagram': {
    icon: 'mdi-instagram',
    color: 'red',
    label: 'instagram',
    value: 'nada'
  },
};

</script>

<template>
  <v-container height="80svh">
    <v-row no-gutters class="h-100">
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <div class="d-block w-100">
          <div class="text-h4 text-md-h1 text-lg-h1 text-primary font-weight-bold">Lucas Rodrigues</div>
          <div class="mb-3">Desenvolvedor Web</div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <CmdCard>
          <v-card min-height="450px">
            <!-- <v-card-title> DEBUG </v-card-title> -->
            <HomeObject></HomeObject>
          </v-card>
          <v-progress-circular
            v-if="false"
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
  <v-container class="py-0">
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
  <v-divider></v-divider>
  <v-card color="black">
    <v-card-title class="text-primary text-center pa-0 mt-3">Projetos</v-card-title>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-card-item class="pa-0 ma-0">
            <template #prepend>
              <v-btn variant="text">
                <v-icon color="primary" size="x-large">mdi-menu-left</v-icon>
              </v-btn>
            </template>
            <div class="d-flex overflow-x-auto pa-5">
              <div v-for="i in 10" :key="i" class="d-block px-3" >
                <v-card 
                  class="w-100"
                  variant="outlined" color="primary">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-avatar size="120">
                      <v-img src="/assets/image/lucas-1-nobg.webp"></v-img>
                    </v-avatar>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                  <v-card-title class="mx-3 pa-0 ">Connect Broker</v-card-title>
                  <v-card-subtitle class="mx-3 pa-0 mt-n2 text-center">Saber mais</v-card-subtitle>
                </v-card>
              </div>
            </div>
            <template #append>
              <v-btn variant="text">
                <v-icon color="primary" size="x-large">mdi-menu-right</v-icon>
              </v-btn>
            </template>
          </v-card-item>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" lg="6">
        <!-- <v-card-title class="text-primary">contato</v-card-title> -->
        <v-card style="margin: 100px 0px ;">
          <v-card-title class="text-primary text-center font-weight-bold">
            {{ $t('getInTouch') }}
          </v-card-title>
          <v-form class="pa-2">
            <v-text-field class="required" variant="outlined" :label="$t('name')"></v-text-field>
            <v-textarea class="required" variant="outlined" :label="$t('yourMessage')"></v-textarea>
            <v-btn type="submit" color="success" :text="$t('send')" variant="elevated" block class="mt-2"></v-btn>
          </v-form>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              v-for="config, method in social" :key="method"
              variant="text"
              size="small"
              :color="config.color" 
              :icon="config.icon"
              @click="">
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <FloatingButton icon="mdi-whatsapp"></FloatingButton>
  <v-footer>
    2025 <v-card-subtitle class="ml-n3">®</v-card-subtitle>
    <v-spacer></v-spacer>
    Lucas Rodrigues
  </v-footer>

</template>


<style>

.required .v-field-label::after {
  content: ' *';
  position: relative;
  font-size: 16px;
}

</style>
