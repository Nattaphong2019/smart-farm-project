<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <!-- plant detail -->
        <b-col cols="12" sm="12" md="12" lg="12" xl="12">
          <b-card>
            <b-row>
              <b-col cols="12" sm="12" md="12" lg="12" xl="12">
                <b-card class="text-center">
                  <b-card-title>Time: {{ timestamp }}</b-card-title>
                </b-card>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="12" xl="12">
                <b-row align-h="between">
                  <b-col cols="12" sm="12" md="12" lg="10" xl="10">
                    <b-form-group
                      label="Template:"
                      label-for="templateSelect"
                      :label-cols="3"
                    >
                      <b-form-select
                        id="templateSelect"
                        :plain="true"
                        :options="templates"
                        value="Please select"
                        v-model="templateSelect"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col
                    cols="12"
                    sm="3"
                    md="3"
                    lg="2"
                    xl="2"
                    class="mb-3 mb-xl-0"
                  >
                    <b-button
                      block
                      variant="dark"
                      @click="addTemplate()"
                      class="mr-1"
                      >Add template</b-button
                    >
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="12" sm="6" md="6" lg="6" xl="6">
                <b-card
                  show-footer
                  no-body
                  border-variant="dark"
                  header-bg-variant="dark"
                  header-text-variant="white"
                >
                  <template v-slot:header>
                    <h4 class="mb-0">Cultivation program</h4>
                  </template>
                  <b-card-body>
                    <b-table
                      :items="cultivationPrograms"
                      :fields="fields"
                      bordered
                    >
                      <template slot="index" slot-scope="data">{{
                        data.index + 1
                      }}</template>
                      <template slot="actions" slot-scope="data">
                        <b-button
                          variant="warning"
                          @click="downloadCultivationPrograms(data.item.id)"
                          class="mr-1"
                          >Download</b-button
                        >
                      </template>
                    </b-table>
                  </b-card-body>
                  <div slot="footer"></div>
                </b-card>
              </b-col>
              <b-col cols="12" sm="6" md="6" lg="6" xl="6">
                <b-card
                  show-footer
                  no-body
                  border-variant="dark"
                  header-bg-variant="dark"
                  header-text-variant="white"
                >
                  <template v-slot:header>
                    <h4 class="mb-0">Template name: {{ form.templateName }}</h4>
                  </template>
                  <b-card-body>
                    <b-card-title
                      >Plant name: {{ form.plantName }}</b-card-title
                    >
                    <b-card-text>Start date: {{ form.startDate }}</b-card-text>
                    <b-card-text>Plant age: {{ form.plantAge }}</b-card-text>
                    <b-card-text
                      >Harvest date: {{ form.harvestDate }}</b-card-text
                    >
                  </b-card-body>
                  <div slot="footer">
                    <b-row align-h="end">
                      <b-col cols="6" sm="4" md="4" lg="3" xl="3">
                        <b-button
                          block
                          variant="dark"
                          @click="editTemplate()"
                          class="mr-1"
                          >Edit</b-button
                        >
                      </b-col>
                      <b-col cols="6" sm="4" md="4" lg="3" xl="3">
                        <b-button block variant="primary">History</b-button>
                      </b-col>
                    </b-row>
                  </div>
                </b-card>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6">
          <b-card>
            <!-- Fertilizer and Water -->
            <b-col cols="12">
              <b-card show-footer>
                <div class="d-flex justify-content-start">
                  <h4>Fertilizer and Water</h4>
                </div>
                <div slot="footer">
                  <b-form-group>
                    <b-row align-h="between">
                      <b-col
                        cols="6"
                        sm="6"
                        md="6"
                        lg="3"
                        xl
                        class="mb-3 mb-xl-0"
                      >
                        <b-form-group
                          label="Fertilizer"
                          label-for="manualFertilizerMode"
                          :label-cols="6"
                        >
                          <div v-if="manualFertilizerMode === true">
                            <c-switch
                              class="mx-1"
                              color="success"
                              size="lg"
                              checked
                              label
                              id="manualFertilizerMode"
                              v-model="manualFertilizerMode"
                            />
                          </div>
                          <div v-else-if="manualFertilizerMode === false">
                            <c-switch
                              class="mx-1"
                              color="success"
                              size="lg"
                              label
                              id="manualFertilizerMode"
                              v-model="manualFertilizerMode"
                            />
                          </div>
                        </b-form-group>
                      </b-col>
                      <b-col
                        cols="6"
                        sm="6"
                        md="6"
                        lg="3"
                        xl
                        class="mb-3 mb-xl-0"
                      >
                        <b-form-group
                          label="Water"
                          label-for="manualWaterMode"
                          :label-cols="6"
                        >
                          <div v-if="manualWaterMode === true">
                            <c-switch
                              class="mx-1"
                              color="success"
                              size="lg"
                              checked
                              label
                              id="manualWaterMode"
                              v-model="manualWaterMode"
                            />
                          </div>
                          <div v-else-if="manualWaterMode === false">
                            <c-switch
                              class="mx-1"
                              color="success"
                              size="lg"
                              label
                              id="manualWaterMode"
                              v-model="manualWaterMode"
                            />
                          </div>
                        </b-form-group>
                      </b-col>
                      <b-col
                        cols="6"
                        sm="6"
                        md="6"
                        lg="3"
                        xl
                        class="mb-3 mb-xl-0"
                      >
                        <b-form-group
                          label="Auto"
                          label-for="autoECMode"
                          :label-cols="6"
                        >
                          <div v-if="autoECMode === true">
                            <c-switch
                              class="mx-1"
                              color="success"
                              size="lg"
                              checked
                              label
                              id="autoECMode"
                              v-model="autoECMode"
                            />
                          </div>
                          <div v-else-if="autoECMode === false">
                            <c-switch
                              class="mx-1"
                              color="success"
                              size="lg"
                              label
                              id="autoECMode"
                              v-model="autoECMode"
                            />
                          </div>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form-group>
                </div>
              </b-card>
            </b-col>
            <!-- light -->
            <b-col cols="12">
              <b-card show-footer>
                <div class="d-flex justify-content-between">
                  <h4>Light</h4>
                  <h4>{{ Sensor.Temt6000_sensor.Val_lightfrequency }} nm</h4>
                </div>
                <b-card-text>
                  Sensor status:
                  {{ Sensor_status.Temt6000_sensor }}
                </b-card-text>
                <b-card-text>
                  Settime status:
                  {{ settimeLight.settimeLightStatus }}
                </b-card-text>
                <div slot="footer">
                  <b-form-group>
                    <b-row align-h="between">
                      <b-col
                        cols="6"
                        sm="6"
                        md="6"
                        lg="3"
                        xl
                        class="mb-3 mb-xl-0"
                      >
                        <b-form-group
                          label="Manual"
                          label-for="manualLightMode"
                          :label-cols="6"
                        >
                          <div v-if="manualLightMode === true">
                            <c-switch
                              class="mx-1"
                              color="success"
                              size="lg"
                              checked
                              label
                              id="manualLightMode"
                              v-model="manualLightMode"
                            />
                          </div>
                          <div v-else-if="manualLightMode === false">
                            <c-switch
                              class="mx-1"
                              color="success"
                              size="lg"
                              label
                              id="manualLightMode"
                              v-model="manualLightMode"
                            />
                          </div>
                        </b-form-group>
                      </b-col>
                      <b-col
                        cols="6"
                        sm="6"
                        md="6"
                        lg="3"
                        xl
                        class="mb-3 mb-xl-0"
                      >
                        <b-form-group
                          label="Auto"
                          label-for="autoLightMode"
                          :label-cols="6"
                        >
                          <div v-if="autoLightMode === true">
                            <c-switch
                              class="mx-1"
                              color="success"
                              size="lg"
                              checked
                              label
                              id="autoLightMode"
                              v-model="autoLightMode"
                            />
                          </div>
                          <div v-else-if="autoLightMode === false">
                            <c-switch
                              class="mx-1"
                              color="success"
                              size="lg"
                              label
                              id="autoLightMode"
                              v-model="autoLightMode"
                            />
                          </div>
                        </b-form-group>
                      </b-col>
                      <b-col
                        cols="6"
                        sm="6"
                        md="6"
                        lg="3"
                        xl
                        class="mb-3 mb-xl-0"
                      >
                        <b-button block variant="dark" @click="setTimeLight()"
                          >Set time</b-button
                        >
                      </b-col>
                    </b-row>
                  </b-form-group>
                </div>
              </b-card>
            </b-col>
          </b-card>
        </b-col>
        <!-- sensor start-->
        <b-col cols="12" sm="12" md="6" lg="6">
          <b-card>
            <b-col cols="12">
              <b-card>
                <div class="d-flex justify-content-between">
                  <h4>Nutrient</h4>
                  <h4>{{ Sensor.Ec_sensor.Ec_value }} mS/cm</h4>
                </div>
                <b-card-text>Sensor status: {{ Sensor_status.EC }}</b-card-text>
              </b-card>
            </b-col>
            <b-col cols="12">
              <b-card>
                <div class="d-flex justify-content-between">
                  <h4>Water temperature</h4>
                  <h4>{{ Sensor.Watertemp_sens.Watertemp_val }} ํC</h4>
                </div>
                <b-card-text
                  >Sensor status: {{ Sensor_status.Watertemp }}</b-card-text
                >
              </b-card>
            </b-col>
            <b-col cols="12">
              <b-card>
                <div class="d-flex justify-content-between">
                  <h4>Humidity</h4>
                  <h4>{{ Sensor.Dht_22.Humd }} %</h4>
                </div>
                <b-card-text
                  >Sensor status: {{ Sensor_status.DHT22 }}</b-card-text
                >
              </b-card>
            </b-col>
            <b-col cols="12">
              <b-card>
                <div class="d-flex justify-content-between">
                  <h4>Room temperature</h4>
                  <h4>{{ Sensor.Dht_22.Temp }} ํC</h4>
                </div>
                <b-card-text
                  >Sensor status: {{ Sensor_status.DHT22 }}</b-card-text
                >
              </b-card>
            </b-col>
            <b-col cols="12">
              <b-card>
                <div class="d-flex justify-content-between">
                  <h4>Node connect status</h4>
                </div>
                <b-card-text>Sensor status: {{ Node_status }}</b-card-text>
              </b-card>
            </b-col>
          </b-card>
        </b-col>
        <!-- sensor end-->
        <!-- start templateModalForm -->
        <b-modal
          title="Edit cultivation program"
          size="lg"
          variant="dark"
          header-bg-variant="dark"
          content-class="border-dark"
          v-model="templateModal"
          @cancel="onReset"
          @ok="onSubmit"
        >
          <b-form id="templateModalForm" ref="templateModalForm">
            <b-form-group>
              <b-form-input
                id="templateId"
                hidden
                v-model="form.templateId"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Template name:"
              label-for="templateName"
              :label-cols="3"
            >
              <b-form-input
                id="templateName"
                name="templateName"
                type="text"
                autocomplete="name"
                placeholder="Enter template name.."
                v-model="form.templateName"
                v-validate="'required'"
                :class="{
                  input: true,
                  'is-invalid': errors.has('templateName')
                }"
              ></b-form-input>
              <i v-show="errors.has('templateName')" class="fa fa-warning"></i>
              <span
                v-show="errors.has('templateName')"
                class="help is-invalid"
                >{{ errors.first("templateName") }}</span
              >
            </b-form-group>
            <b-form-group
              label="Plant name:"
              label-for="plantName"
              :label-cols="3"
            >
              <b-form-input
                id="plantName"
                name="plantName"
                type="text"
                autocomplete="name"
                placeholder="Enter plant name.."
                v-model="form.plantName"
                v-validate="'required'"
                :class="{ input: true, 'is-invalid': errors.has('plantName') }"
              ></b-form-input>
              <i v-show="errors.has('plantName')" class="fa fa-warning"></i>
              <span v-show="errors.has('plantName')" class="help is-invalid">
                {{ errors.first("plantName") }}
              </span>
            </b-form-group>
            <b-form-group
              label="Plant age (Day):"
              label-for="plantAge"
              :label-cols="3"
            >
              <b-form-input
                id="plantAge"
                type="number"
                name="plantAge"
                autocomplete="number"
                placeholder="Enter plant age.."
                v-model="form.plantAge"
                v-validate="'required|numeric'"
                :class="{ input: true, 'is-invalid': errors.has('plantAge') }"
              ></b-form-input>
              <i v-show="errors.has('plantAge')" class="fa fa-warning"></i>
              <span v-show="errors.has('plantAge')" class="help is-invalid">
                {{ errors.first("plantAge") }}
              </span>
            </b-form-group>
            <b-form-group
              label="Light (nm):"
              label-for="lightMin"
              :label-cols="3"
            >
              <b-row>
                <b-col cols="6">
                  <b-form-group
                    label="Min"
                    label-for="lightMin"
                    :label-cols="3"
                  >
                    <b-form-input
                      id="lightMin"
                      type="number"
                      name="lightMin"
                      autocomplete="number"
                      v-model="form.lightMin"
                      v-validate="'required'"
                      :class="{
                        input: true,
                        'is-invalid': errors.has('lightMin')
                      }"
                    ></b-form-input>
                    <i
                      v-show="errors.has('lightMin')"
                      class="fa fa-warning"
                    ></i>
                    <span
                      v-show="errors.has('lightMin')"
                      class="help is-invalid"
                      >{{ errors.first("lightMin") }}</span
                    >
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group
                    label="Max"
                    label-for="lightMax"
                    :label-cols="3"
                  >
                    <b-form-input
                      id="lightMax"
                      type="number"
                      name="lightMax"
                      autocomplete="number"
                      v-model="form.lightMax"
                      v-validate="'required'"
                      :class="{
                        input: true,
                        'is-invalid': errors.has('lightMax')
                      }"
                    ></b-form-input>
                    <i
                      v-show="errors.has('lightMax')"
                      class="fa fa-warning"
                    ></i>
                    <span
                      v-show="errors.has('lightMax')"
                      class="help is-invalid"
                      >{{ errors.first("lightMax") }}</span
                    >
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group
              label="Nutrient (mS/cm):"
              label-for="nutrientMin"
              :label-cols="3"
            >
              <b-row>
                <b-col cols="6">
                  <b-form-group
                    label="Min"
                    label-for="nutrientMin"
                    :label-cols="3"
                  >
                    <b-form-input
                      id="nutrientMin"
                      type="number"
                      name="nutrientMin"
                      autocomplete="number"
                      v-model="form.nutrientMin"
                      v-validate="'required'"
                      :class="{
                        input: true,
                        'is-invalid': errors.has('nutrientMin')
                      }"
                    ></b-form-input>
                    <i
                      v-show="errors.has('nutrientMin')"
                      class="fa fa-warning"
                    ></i>
                    <span
                      v-show="errors.has('nutrientMin')"
                      class="help is-invalid"
                      >{{ errors.first("nutrientMin") }}</span
                    >
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group
                    label="Max"
                    label-for="nutrientMax"
                    :label-cols="3"
                  >
                    <b-form-input
                      id="nutrientMax"
                      type="number"
                      name="nutrientMax"
                      autocomplete="number"
                      v-model="form.nutrientMax"
                      v-validate="'required'"
                      :class="{
                        input: true,
                        'is-invalid': errors.has('nutrientMax')
                      }"
                    ></b-form-input>
                    <i
                      v-show="errors.has('nutrientMax')"
                      class="fa fa-warning"
                    ></i>
                    <span
                      v-show="errors.has('nutrientMax')"
                      class="help is-invalid"
                      >{{ errors.first("nutrientMax") }}</span
                    >
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group
              label="Humidity (%):"
              label-for="humidityMin"
              :label-cols="3"
            >
              <b-row>
                <b-col cols="6">
                  <b-form-group
                    label="Min"
                    label-for="humidityMin"
                    :label-cols="3"
                  >
                    <b-form-input
                      id="humidityMin"
                      type="number"
                      name="humidityMin"
                      autocomplete="number"
                      v-model="form.humidityMin"
                      v-validate="'required'"
                      :class="{
                        input: true,
                        'is-invalid': errors.has('humidityMin')
                      }"
                    ></b-form-input>
                    <i
                      v-show="errors.has('humidityMin')"
                      class="fa fa-warning"
                    ></i>
                    <span
                      v-show="errors.has('humidityMin')"
                      class="help is-invalid"
                      >{{ errors.first("humidityMin") }}</span
                    >
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group
                    label="Max"
                    label-for="humidityMax"
                    :label-cols="3"
                  >
                    <b-form-input
                      id="humidityMax"
                      type="number"
                      name="humidityMax"
                      autocomplete="number"
                      v-model="form.humidityMax"
                      v-validate="'required'"
                      :class="{
                        input: true,
                        'is-invalid': errors.has('humidityMax')
                      }"
                    ></b-form-input>
                    <i
                      v-show="errors.has('humidityMax')"
                      class="fa fa-warning"
                    ></i>
                    <span
                      v-show="errors.has('humidityMax')"
                      class="help is-invalid"
                      >{{ errors.first("humidityMax") }}</span
                    >
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group
              label="Water temperature ( ํC):"
              label-for="waterTempMin"
              :label-cols="3"
            >
              <b-row>
                <b-col cols="6">
                  <b-form-group
                    label="Min"
                    label-for="waterTempMin"
                    :label-cols="3"
                  >
                    <b-form-input
                      id="waterTempMin"
                      type="number"
                      name="waterTempMin"
                      autocomplete="number"
                      v-model="form.waterTempMin"
                      v-validate="'required'"
                      :class="{
                        input: true,
                        'is-invalid': errors.has('waterTempMin')
                      }"
                    ></b-form-input>
                    <i
                      v-show="errors.has('waterTempMin')"
                      class="fa fa-warning"
                    ></i>
                    <span
                      v-show="errors.has('waterTempMin')"
                      class="help is-invalid"
                      >{{ errors.first("waterTempMin") }}</span
                    >
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group
                    label="Max"
                    label-for="waterTempMax"
                    :label-cols="3"
                  >
                    <b-form-input
                      id="waterTempMax"
                      type="number"
                      name="waterTempMax"
                      autocomplete="number"
                      v-model="form.waterTempMax"
                      v-validate="'required'"
                      :class="{
                        input: true,
                        'is-invalid': errors.has('waterTempMax')
                      }"
                    ></b-form-input>
                    <i
                      v-show="errors.has('waterTempMax')"
                      class="fa fa-warning"
                    ></i>
                    <span
                      v-show="errors.has('waterTempMax')"
                      class="help is-invalid"
                      >{{ errors.first("waterTempMax") }}</span
                    >
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group
              label="Room temperature ( ํC):"
              label-for="roomTempMin"
              :label-cols="3"
            >
              <b-row>
                <b-col cols="6">
                  <b-form-group
                    label="Min"
                    label-for="roomTempMin"
                    :label-cols="3"
                  >
                    <b-form-input
                      id="roomTempMin"
                      type="number"
                      name="roomTempMin"
                      autocomplete="number"
                      v-model="form.roomTempMin"
                      v-validate="'required'"
                      :class="{
                        input: true,
                        'is-invalid': errors.has('roomTempMin')
                      }"
                    ></b-form-input>
                    <i
                      v-show="errors.has('roomTempMin')"
                      class="fa fa-warning"
                    ></i>
                    <span
                      v-show="errors.has('roomTempMin')"
                      class="help is-invalid"
                      >{{ errors.first("roomTempMin") }}</span
                    >
                  </b-form-group>
                </b-col>
                <b-col cols="6">
                  <b-form-group
                    label="Max"
                    label-for="roomTempMax"
                    :label-cols="3"
                  >
                    <b-form-input
                      id="roomTempMax"
                      type="number"
                      name="roomTempMax"
                      autocomplete="number"
                      v-model="form.roomTempMax"
                      v-validate="'required'"
                      :class="{
                        input: true,
                        'is-invalid': errors.has('roomTempMax')
                      }"
                    ></b-form-input>
                    <i
                      v-show="errors.has('roomTempMax')"
                      class="fa fa-warning"
                    ></i>
                    <span
                      v-show="errors.has('roomTempMax')"
                      class="help is-invalid"
                      >{{ errors.first("roomTempMax") }}</span
                    >
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form-group>
          </b-form>
        </b-modal>
        <!-- end templateModalForm -->
        <!-- start settimeLightModalForm -->
        <b-modal
          title="Settime light"
          size="lg"
          variant="dark"
          header-bg-variant="dark"
          content-class="border-dark"
          v-model="settimeLightModal"
          @cancel="onReset"
          @ok="onSubmit"
        >
          <b-form id="settimeLightForm" ref="settimeLightForm">
            <b-row>
              <b-col cols="12" sm="6" md="6" lg="6">
                <b-form-group
                  label="Time on"
                  label-for="lightTimeOn"
                  :label-cols="3"
                >
                  <b-form-input
                    id="lightTimeOn"
                    type="time"
                    name="lightTimeOn"
                    autocomplete="name"
                    v-model="settimeLight.lightTimeOn"
                    v-validate="'required'"
                    :class="{
                      input: true,
                      'is-invalid': errors.has('lightTimeOn')
                    }"
                  ></b-form-input>
                  <i
                    v-show="errors.has('lightTimeOn')"
                    class="fa fa-warning"
                  ></i>
                  <span
                    v-show="errors.has('lightTimeOn')"
                    class="help is-invalid"
                    >{{ errors.first("lightTimeOn") }}</span
                  >
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="6" md="6" lg="6">
                <b-form-group
                  label="Time off"
                  label-for="lightTimeOff"
                  :label-cols="3"
                >
                  <b-form-input
                    id="lightTimeOff"
                    type="time"
                    name="lightTimeOff"
                    autocomplete="name"
                    v-model="settimeLight.lightTimeOff"
                    v-validate="'required'"
                    :class="{
                      input: true,
                      'is-invalid': errors.has('lightTimeOff')
                    }"
                  ></b-form-input>
                  <i
                    v-show="errors.has('lightTimeOff')"
                    class="fa fa-warning"
                  ></i>
                  <span
                    v-show="errors.has('lightTimeOff')"
                    class="help is-invalid"
                    >{{ errors.first("lightTimeOff") }}</span
                  >
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="6" md="6" lg="6">
                <b-form-group
                  label="Start date"
                  label-for="lightStartDate"
                  :label-cols="3"
                >
                  <b-form-input
                    id="lightStartDate"
                    type="date"
                    name="lightStartDate"
                    autocomplete="date"
                    v-model="settimeLight.lightStartDate"
                    v-validate="'required'"
                    :class="{
                      input: true,
                      'is-invalid': errors.has('lightStartDate')
                    }"
                  ></b-form-input>
                  <i
                    v-show="errors.has('lightStartDate')"
                    class="fa fa-warning"
                  ></i>
                  <span
                    v-show="errors.has('lightStartDate')"
                    class="help is-invalid"
                    >{{ errors.first("lightStartDate") }}</span
                  >
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="6" md="6" lg="6">
                <b-form-group
                  label="End date"
                  label-for="lightEndDate"
                  :label-cols="3"
                >
                  <b-form-input
                    id="lightEndDate"
                    type="date"
                    name="lightEndDate"
                    autocomplete="date"
                    v-model="settimeLight.lightEndDate"
                    v-validate="'required'"
                    :class="{
                      input: true,
                      'is-invalid': errors.has('lightEndDate')
                    }"
                  ></b-form-input>
                  <i
                    v-show="errors.has('lightEndDate')"
                    class="fa fa-warning"
                  ></i>
                  <span
                    v-show="errors.has('lightEndDate')"
                    class="help is-invalid"
                    >{{ errors.first("lightEndDate") }}</span
                  >
                </b-form-group>
              </b-col>
            </b-row>
          </b-form>
        </b-modal>
        <!-- end settimeLightModalForm -->
        <!-- start inPutDateModalForm -->
        <b-modal
          title="Settime light"
          size="lg"
          variant="dark"
          header-bg-variant="dark"
          content-class="border-dark"
          v-model="inPutDateModal"
          @cancel="onReset"
          @ok="onSubmit"
        >
          <b-form id="inPutDateModalForm" ref="inPutDateModalForm">
            <b-row>
              <b-col cols="12" sm="12" md="12" lg="12">
                <b-form-group
                  label="Start date"
                  label-for="startDate"
                  :label-cols="3"
                >
                  <b-form-input
                    id="startDate"
                    type="date"
                    name="startDate"
                    autocomplete="date"
                    v-model="form.startDate"
                    v-validate="'required'"
                    :class="{
                      input: true,
                      'is-invalid': errors.has('startDate')
                    }"
                  ></b-form-input>
                  <i v-show="errors.has('startDate')" class="fa fa-warning"></i>
                  <span
                    v-show="errors.has('startDate')"
                    class="help is-invalid"
                    >{{ errors.first("startDate") }}</span
                  >
                </b-form-group>
              </b-col>
            </b-row>
          </b-form>
        </b-modal>
        <!-- end inPutDateModalForm -->
      </b-row>
    </div>
  </div>
</template>

<script>
import { Callout } from "@coreui/vue";
import { Switch as cSwitch } from "@coreui/vue";
import { rd } from "./db";
import { db } from "./db";

var moment = require("moment");

var sensorRef = rd.ref("/Sensor");
var sensorStatusRef = rd.ref("/Sensor_status");
var relayRef = rd.ref("/Relay");
var lightRef = relayRef.child("Relay_active_ch3(Light_1)");
var fertilizerRef = relayRef.child("Relay_active_ch1(Pump_1)");
var waterRef = relayRef.child("Relay_active_ch2(Pump_2)");

export default {
  name: "dashboard",
  components: {
    Callout,
    cSwitch
  },
  mounted() {
    //show data form firebase realtime database
    sensorRef.on("value", snapshot => {
      this.Sensor = snapshot.val();
    });
    sensorStatusRef.on("value", snapshot => {
      this.Sensor_status = snapshot.val();
    });
  },
  watch: {
    manualLightMode(val) {
      if (val == true) {
        lightRef.set("1");
      } else {
        lightRef.set("0");
      }
    },
    manualFertilizerMode(val) {
      if (val == true) {
        fertilizerRef.set("1");
      } else {
        fertilizerRef.set("0");
      }
    },
    manualWaterMode(val) {
      if (val == true) {
        waterRef.set("1");
      } else {
        waterRef.set("0");
      }
    },
    autoLightMode(val) {
      if (val == true) {
        if (
          this.form.lightMin > this.Sensor.Temt6000_sensor.Val_lightfrequency
        ) {
          lightRef.set("1");
        } else if (
          this.form.lightMax < this.Sensor.Temt6000_sensor.Val_lightfrequency
        ) {
          lightRef.set("0");
        }
      } else {
        lightRef.set("0");
      }
    },
    autoECMode(val) {
      if (val == true) {
        if (this.form.nutrientMin > this.Sensor.Ec_sensor.Ec_value) {
          fertilizerRef.set("1");
        } else if (
          this.form.nutrientMax < this.this.Sensor.Ec_sensor.Ec_value
        ) {
          waterRef.set("1");
        } else {
          fertilizerRef.set("0");
          waterRef.set("0");
        }
      }
    },
    "Sensor.Ec_sensor.Ec_value"(val) {
      if (this.form.nutrientMin === val) {
        this.$bvToast.toast(`Nutrient value is less than required`, {
          title: "Warning!",
          variant: "warning",
          solid: true
        });
      } else if (this.form.nutrientMax === val) {
        this.$bvToast.toast(`Nutrient value greater than desired`, {
          title: "Warning!",
          variant: "warning",
          solid: true
        });
      }
    },
    "Sensor.Watertemp_sens.Watertemp_val"(val) {
      if (this.form.waterTempMin === val) {
        this.$bvToast.toast(`Water temperature value is less than required`, {
          title: "Warning!",
          variant: "warning",
          solid: true
        });
      } else if (this.form.waterTempMax === val) {
        this.$bvToast.toast(`Water temperature value greater than desired`, {
          title: "Warning!",
          variant: "warning",
          solid: true
        });
      }
    },
    "Sensor.Dht_22.Humd"(val) {
      if (this.form.humidityMin === val) {
        this.$bvToast.toast(`Humidity value is less than required`, {
          title: "Warning!",
          variant: "warning",
          solid: true
        });
      } else if (this.form.humidityMax === val) {
        this.$bvToast.toast(`Humidity value greater than desired`, {
          title: "Warning!",
          variant: "warning",
          solid: true
        });
      }
    },
    "Sensor.Dht_22.Temp"(val) {
      if (this.form.roomTempMin === val) {
        this.$bvToast.toast(`Room temperature value is less than required`, {
          title: "Warning!",
          variant: "warning",
          solid: true
        });
      } else if (this.form.roomTempMax === val) {
        this.$bvToast.toast(`Room temperature value greater than desired`, {
          title: "Warning!",
          variant: "warning",
          solid: true
        });
      }
    },
    "Sensor.Temt6000_sensor.Val_lightfrequency"(val) {
      if (this.form.lightMin === val) {
        this.$bvToast.toast(`Nutrient value is less than required`, {
          title: "Warning!",
          variant: "warning",
          solid: true
        });
      } else if (this.form.lightMax === val) {
        this.$bvToast.toast(`Nutrient value greater than desired`, {
          title: "Warning!",
          variant: "warning",
          solid: true
        });
      }
    },
    "Sensor_status.Node_connect_status"(val, oldval) {
      if (oldval === val) {
        this.Node_status = "May have a problem";
      } else {
        this.Node_status = "OK";
      }
    },
    date(val) {
      if (
        this.settimeLight.lightStartDate === val &&
        this.settimeLight.settimeLightStatus === "have"
      ) {
        this.settimeMsg = "on";
      } else if (
        this.settimeLight.lightEndDate === val &&
        this.settimeLight.settimeLightStatus === "have"
      ) {
        this.settimeMsg = "off";
      }
    },
    time(val) {
      if (this.settimeMsg === "on") {
        if (this.settimeLight.lightTimeOn === val) {
          lightRef.set("1");
        } else if (this.settimeLight.lightTimeOff !== val) {
          lightRef.set("1");
        } else if (this.settimeLight.lightTimeOff === val) {
          lightRef.set("0");
        }
      } else if (this.settimeMsg === "off") {
        lightRef.set("0");
      }
    }
  },
  data: function() {
    return {
      type: "",
      settimeLightModal: false,
      templateModal: false,
      inPutDateModal: false,
      templateSelect: "",
      templatesGet: {
        templateId: "",
        templateName: "",
        plantName: "",
        plantAge: null,
        lightMin: null,
        lightMax: null,
        nutrientMin: null,
        nutrientMax: null,
        humidityMin: null,
        humidityMax: null,
        waterTempMin: null,
        waterTempMax: null,
        roomTempMin: null,
        roomTempMax: null
      },
      cultivationPrograms: [],
      fields: [
        { key: "index", label: "No.", sortable: true, class: "text-center" },
        {
          key: "templateName",
          label: "Template name",
          sortable: true,
          class: "text-center"
        },
        { key: "plantName", label: "Plant name", class: "text-center" },
        { key: "actions", label: "Actions", class: "text-center" }
      ],
      tempID: "",
      templates: [],
      form: {
        templateId: "",
        templateName: "",
        plantName: "",
        plantAge: null,
        startDate: null,
        harvestDate: null,
        lightMin: null,
        lightMax: null,
        nutrientMin: null,
        nutrientMax: null,
        humidityMin: null,
        humidityMax: null,
        waterTempMin: null,
        waterTempMax: null,
        roomTempMin: null,
        roomTempMax: null
      },
      autoLightMode: false,
      autoECMode: false,
      manualLightMode: false,
      manualFertilizerMode: false,
      manualWaterMode: false,
      settimeMsg: "",
      settimeLight: {
        lightTimeOn: "",
        lightTimeOff: "",
        lightStartDate: "",
        lightEndDate: "",
        settimeLightStatus: ""
      },
      timestamp: "",
      time: "",
      date: "",
      future: "",
      Sensor: {
        Dht_22: {
          Humd: 0,
          Temp: 0
        },
        Ec_sensor: {
          Ec_value: 0
        },
        Temt6000_sensor: {
          Val_lightfrequency: 0
        },
        Watertemp_sens: {
          Watertemp_val: 0
        }
      },
      Node_status: "",
      Sensor_status: {
        DHT22: "",
        EC: "",
        Node_connect_status: 0,
        Temt6000_sensor: "",
        Watertemp: ""
      }
    };
  },
  created() {
    setInterval(this.getTimeNow, 1000);
    let templateGetRef = db.collection("templates");
    templateGetRef
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let templates = doc.data().templateName;
          this.templates.push(templates);
        });
        this.$bvToast.toast(`Success getting documents`, {
          title: "Success",
          variant: "success",
          solid: true
        });
      })
      .catch(error => {
        this.$bvToast.toast(`Error getting documents ${error}`, {
          title: "Error",
          variant: "danger",
          solid: true
        });
      });

    let cultivationProgramGetRef = db.collection("cultivationPrograms");
    cultivationProgramGetRef
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let cultivationPrograms = doc.data();
          cultivationPrograms.id = doc.id;
          this.cultivationPrograms.push(cultivationPrograms);
        });
        this.$bvToast.toast(`Success getting documents`, {
          title: "Success",
          variant: "success",
          solid: true
        });
      })
      .catch(error => {
        this.$bvToast.toast(`Error getting documents ${error}`, {
          title: "Error",
          variant: "danger",
          solid: true
        });
      });

    let settimeLightGetRef = db.collection("settimeLight").doc("haveSettime");
    settimeLightGetRef
      .get()
      .then(doc => {
        if (!doc.exists) {
          this.$bvToast.toast(`No such document!`, {
            title: "No document",
            variant: "warning",
            solid: true
          });
        } else {
          this.settimeLight.lightTimeOn = doc.data().lightTimeOn;
          this.settimeLight.lightTimeOff = doc.data().lightTimeOff;
          this.settimeLight.lightStartDate = doc.data().lightStartDate;
          this.settimeLight.lightEndDate = doc.data().lightEndDate;
          this.settimeLight.settimeLightStatus = doc.data().settimeLightStatus;
          this.$bvToast.toast(`Success getting documents`, {
            title: "Success",
            variant: "success",
            solid: true
          });
        }
      })
      .catch(error => {
        this.$bvToast.toast(`Error getting documents ${error}`, {
          title: "Error",
          variant: "danger",
          solid: true
        });
      });
  },
  methods: {
    getTimeNow: function() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time = today.getHours() + ":" + today.getMinutes();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
      this.time = time;
      this.date = date;
    },
    addTemplate() {
      let templateGetRef = db
        .collection("templates")
        .where("templateName", "==", this.templateSelect);
      templateGetRef
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.templatesGet.templateName = doc.data().templateName;
            this.templatesGet.plantName = doc.data().plantName;
            this.templatesGet.plantAge = doc.data().plantAge;
            this.templatesGet.lightMin = doc.data().lightMin;
            this.templatesGet.lightMax = doc.data().lightMax;
            this.templatesGet.nutrientMin = doc.data().nutrientMin;
            this.templatesGet.nutrientMax = doc.data().nutrientMax;
            this.templatesGet.humidityMin = doc.data().humidityMin;
            this.templatesGet.humidityMax = doc.data().humidityMax;
            this.templatesGet.waterTempMin = doc.data().waterTempMin;
            this.templatesGet.waterTempMax = doc.data().waterTempMax;
            this.templatesGet.roomTempMin = doc.data().roomTempMin;
            this.templatesGet.roomTempMax = doc.data().roomTempMax;
            let cultivationProgramGetRef = db.collection("cultivationPrograms");
            let cultivationProgramData = this.templatesGet;
            cultivationProgramGetRef
              .add(cultivationProgramData)
              .then(() => {
                this.$bvToast.toast(
                  "Add data to cultivationProgram database success",
                  {
                    title: "Success",
                    variant: "success",
                    solid: true
                  }
                );
                location.reload();
              })
              .catch(error => {
                this.$bvToast.toast(
                  `Add data to cultivationProgram database error ${error}`,
                  {
                    title: "Error",
                    variant: "danger",
                    solid: true
                  }
                );
              });
          });
          this.$bvToast.toast(`get data from a template success`, {
            title: "Success",
            variant: "success",
            solid: true
          });
        })
        .catch(error => {
          this.$bvToast.toast(`get data from a template error ${error}`, {
            title: "Error",
            variant: "danger",
            solid: true
          });
        });
    },
    downloadCultivationPrograms(id) {
      let templateGetRef = db.collection("cultivationPrograms").doc(id);
      templateGetRef
        .get()
        .then(doc => {
          if (!doc.exists) {
            this.$bvToast.toast(`No such document!`, {
              title: "No document",
              variant: "warning",
              solid: true
            });
          } else {
            if (this.form.startDate === "" && this.form.harvestDate === "") {
              this.form.templateName = doc.data().templateName;
              this.form.plantName = doc.data().plantName;
              this.form.plantAge = doc.data().plantAge;
              this.form.lightMin = doc.data().lightMin;
              this.form.lightMax = doc.data().lightMax;
              this.form.nutrientMin = doc.data().nutrientMin;
              this.form.nutrientMax = doc.data().nutrientMax;
              this.form.humidityMin = doc.data().humidityMin;
              this.form.humidityMax = doc.data().humidityMax;
              this.form.waterTempMin = doc.data().waterTempMin;
              this.form.waterTempMax = doc.data().waterTempMax;
              this.form.roomTempMin = doc.data().roomTempMin;
              this.form.roomTempMax = doc.data().roomTempMax;
              this.form.templateId = id;
              this.inPutDateModal = true;
              this.type = "inPutDate";
            } else if (
              this.form.startDate !== "" &&
              this.form.harvestDate !== ""
            ) {
              this.form.templateName = doc.data().templateName;
              this.form.plantName = doc.data().plantName;
              this.form.plantAge = doc.data().plantAge;
              this.form.startDate = doc.data().startDate;
              this.form.harvestDate = doc.data().harvestDate;
              this.form.lightMin = doc.data().lightMin;
              this.form.lightMax = doc.data().lightMax;
              this.form.nutrientMin = doc.data().nutrientMin;
              this.form.nutrientMax = doc.data().nutrientMax;
              this.form.humidityMin = doc.data().humidityMin;
              this.form.humidityMax = doc.data().humidityMax;
              this.form.waterTempMin = doc.data().waterTempMin;
              this.form.waterTempMax = doc.data().waterTempMax;
              this.form.roomTempMin = doc.data().roomTempMin;
              this.form.roomTempMax = doc.data().roomTempMax;
              this.form.templateId = id;
              this.$bvToast.toast(`Download cultivation programs success`, {
                title: "Success",
                variant: "success",
                solid: true
              });
            }
          }
        })
        .catch(error => {
          this.$bvToast.toast(`Download cultivation programs error ${error}`, {
            title: "Error",
            variant: "danger",
            solid: true
          });
        });
    },
    setTimeLight() {
      this.settimeLightModal = true;
      this.type = "settime";
    },
    editTemplate(id) {
      this.templateModal = true;
      this.type = "edit";
      let templateGetRef = db.collection("cultivationPrograms").doc(id);
      templateGetRef
        .get()
        .then(doc => {
          if (!doc.exists) {
            this.$bvToast.toast(`No such document!`, {
              title: "No document",
              variant: "warning",
              solid: true
            });
          } else {
            this.form.templateName = doc.data().templateName;
            this.form.plantName = doc.data().plantName;
            this.form.plantAge = doc.data().plantAge;
            this.form.lightMin = doc.data().lightMin;
            this.form.lightMax = doc.data().lightMax;
            this.form.nutrientMin = doc.data().nutrientMin;
            this.form.nutrientMax = doc.data().nutrientMax;
            this.form.humidityMin = doc.data().humidityMin;
            this.form.humidityMax = doc.data().humidityMax;
            this.form.waterTempMin = doc.data().waterTempMin;
            this.form.waterTempMax = doc.data().waterTempMax;
            this.form.roomTempMin = doc.data().roomTempMin;
            this.form.roomTempMax = doc.data().roomTempMax;
            this.form.templateId = id;
            this.$bvToast.toast(`Success getting documents`, {
              title: "Success",
              variant: "success",
              solid: true
            });
          }
        })
        .catch(error => {
          this.$bvToast.toast(`Error getting documents ${error}`, {
            title: "Error",
            variant: "danger",
            solid: true
          });
        });
    },
    async onSubmit(evt) {
      evt.preventDefault();
      this.$validator.validate().then(valid => {
        if (valid) {
          if (this.type === "edit") {
            let cultivationProgramGetRef = db
              .collection("cultivationPrograms")
              .doc(this.form.templateId);
            let cultivationProgramsData = this.form;
            cultivationProgramGetRef
              .update(cultivationProgramsData)
              .then(() => {
                this.$bvToast.toast("Update data to database success", {
                  title: "Success",
                  variant: "success",
                  solid: true
                });
                this.templateModal = false;
                location.reload();
              })
              .catch(error => {
                this.$bvToast.toast(`Update data to database error ${error}`, {
                  title: "Error",
                  variant: "danger",
                  solid: true
                });
              });
          } else if (this.type === "inPutDate") {
            var startDate = moment(this.form.startDate, "YYYY-MM-DD")
              .add(this.form.plantAge, "days")
              .format("YYYY-MM-DD");
            this.form.harvestDate = startDate;
            console.log(this.form.templateId);
            let cultivationProgramGetRef = db
              .collection("cultivationPrograms")
              .doc(this.form.templateId);
            let dateData = this.form;
            cultivationProgramGetRef
              .update(dateData)
              .then(() => {
                this.$bvToast.toast(
                  "Add date to cultivationPrograms database success",
                  {
                    title: "Success",
                    variant: "success",
                    solid: true
                  }
                );
                this.inPutDateModal = false;
                location.reload();
              })
              .catch(error => {
                this.$bvToast.toast(
                  `Add date to cultivationPrograms database error ${error}`,
                  {
                    title: "Error",
                    variant: "danger",
                    solid: true
                  }
                );
              });
          } else if (this.type === "settime") {
            let settimeLightGetRef = db
              .collection("settimeLight")
              .doc("haveSettime");
            this.settimeLight.settimeLightStatus = "have";
            let settimeLightData = this.settimeLight;
            settimeLightGetRef
              .update(settimeLightData)
              .then(() => {
                this.$bvToast.toast("Settime light success", {
                  title: "Success",
                  variant: "success",
                  solid: true
                });
                this.settimeLightModal = false;
                location.reload();
              })
              .catch(error => {
                this.$bvToast.toast(`Settime light error ${error}`, {
                  title: "Error",
                  variant: "danger",
                  solid: true
                });
              });
          }
        }
      });
    },
    onReset(evt) {
      evt.preventDefault();
      this.templateModal = false;
      this.inPutDateModal = false;
      this.settimeLightModal = false;
    }
  }
};
</script>
