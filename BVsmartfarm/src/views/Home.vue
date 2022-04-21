<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <b-card>
          <b-card class="text-center">
            <b-card-title>Time: {{ timestamp }}</b-card-title>
          </b-card>
          <div slot="header">
            <i class="fa fa-align-justify"></i> Plant template
          </div>
          <!-- start templateForm -->
          <b-form id="templateForm">
            <b-form-group>
              <b-row align-h="between">
                <b-col cols="6" sm="3" md="3" lg="2">
                  <label>
                    <h3>Template</h3>
                  </label>
                </b-col>
                <b-col cols="6" sm="3" md="3" lg="2">
                  <b-button
                    block
                    variant="dark"
                    @click="addTemplate()"
                    class="mr-1"
                    >Create</b-button
                  >
                </b-col>
              </b-row>
            </b-form-group>
          </b-form>
          <!-- end templateForm -->
          <!-- start templateModalForm -->
          <b-modal
            title="Plant template"
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
                <i
                  v-show="errors.has('templateName')"
                  class="fa fa-warning"
                ></i>
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
                  :class="{
                    input: true,
                    'is-invalid': errors.has('plantName')
                  }"
                ></b-form-input>
                <i v-show="errors.has('plantName')" class="fa fa-warning"></i>
                <span
                  v-show="errors.has('plantName')"
                  class="help is-invalid"
                  >{{ errors.first("plantName") }}</span
                >
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
                <span v-show="errors.has('plantAge')" class="help is-invalid">{{
                  errors.first("plantAge")
                }}</span>
              </b-form-group>
              <b-form-group label="Light (nm):" label-for="lightMin" :label-cols="3">
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
          <b-table :items="templates" :fields="fields" bordered>
            <template slot="index" slot-scope="data">
              {{ data.index + 1 }}
            </template>
            <template slot="actions" slot-scope="data">
              <b-button
                variant="warning"
                @click="editTemplate(data.item.id)"
                class="mr-1"
                >Edit</b-button
              >
              <b-button
                variant="danger"
                @click="showAlertDelete(data.item.id)"
                class="mr-1"
                >Delete</b-button
              >
            </template>
          </b-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { db } from "./db";

export default {
  data: () => {
    return {
      type: "",
      templates: [],
      fields: [
        { key: "index", label: "No.", sortable: true, class: "text-center" },
        { key: "templateName", label: "Template name", sortable: true, class: "text-center" },
        { key: "plantName", label: "Plant name", class: "text-center" },
        { key: "plantAge", label: "Plant age (Day)", class: "text-center" },
        { key: "actions", label: "Actions", class: "text-center" }
      ],
      templateModal: false,
      timestamp: "",
      form: {
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
        roomTempMax: null,
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
          let templates = doc.data();
          templates.id = doc.id;
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
    },
    async onSubmit(evt) {
      evt.preventDefault();
      this.$validator.validate().then(valid => {
        if (valid) {
          if (this.type === "create") {
            let templateRef = db.collection("templates");
            let templateData = this.form;
            templateRef
              .add(templateData)
              .then(() => {
                this.$bvToast.toast("Add data to database success", {
                  title: "Success",
                  variant: "success",
                  solid: true
                });
                this.templateModal = false;
                this.form.templateName = "";
                this.form.plantName = "";
                this.form.plantAge = null;
                this.form.lightMin = null;
                this.form.lightMax = null;
                this.form.nutrientMin = null;
                this.form.nutrientMax = null;
                this.form.humidityMin = null;
                this.form.humidityMax = null;
                this.form.waterTempMin = null;
                this.form.waterTempMax = null;
                this.form.roomTempMin = null;
                this.form.roomTempMax = null;
                location.reload();
              })
              .catch(error => {
                this.$bvToast.toast(`Add data to database error ${error}`, {
                  title: "Error",
                  variant: "danger",
                  solid: true
                });
              });
          } else if (this.type === "edit") {
            let templateGetRef = db
              .collection("templates")
              .doc(this.form.templateId);
            let templateData = this.form;
            templateGetRef
              .update(templateData)
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
          }
        }
      });
    },
    onReset(evt) {
      evt.preventDefault();
      this.templateModal = false;
      this.form.templateName = "";
      this.form.plantName = "";
      this.form.plantAge = null;
      this.form.lightMin = null;
      this.form.lightMax = null;
      this.form.nutrientMin = null;
      this.form.nutrientMax = null;
      this.form.humidityMin = null;
      this.form.humidityMax = null;
      this.form.waterTempMin = null;
      this.form.waterTempMax = null;
      this.form.roomTempMin = null;
      this.form.roomTempMax = null;
    },
    showAlertDelete(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          let deleteTemplateRef = db.collection("templates").doc(id);
          deleteTemplateRef
            .delete()
            .then(() => {
              this.$swal({
                icon: "success",
                title: "Deleted!",
                text: "Your file has been deleted."
              });
              location.reload();
            })
            .catch(error => {
              this.$swal({
                icon: "error",
                title: "Not delete!",
                text: `Something went wrong! ${error}`
              });
            });
        }
      });
    },
    addTemplate() {
      this.form.templateName = "";
      this.form.plantName = "";
      this.form.plantAge = null;
      this.form.lightMin = null;
      this.form.lightMax = null;
      this.form.nutrientMin = null;
      this.form.nutrientMax = null;
      this.form.humidityMin = null;
      this.form.humidityMax = null;
      this.form.waterTempMin = null;
      this.form.waterTempMax = null;
      this.form.roomTempMin = null;
      this.form.roomTempMax = null;
      this.templateModal = true;
      this.type = "create";
    },
    editTemplate(id) {
      this.templateModal = true;
      this.type = "edit";
      let templateGetRef = db.collection("templates").doc(id);
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
    }
  }
};
</script>
