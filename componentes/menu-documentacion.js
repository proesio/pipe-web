/**
 * Menú de documentación.
 * 
 * @author    Juan Felipe Valencia Murillo  <juanfe0245@gmail.com>
 * @copyright 2018 - presente  Juan Felipe Valencia Murillo
 */

Vue.component('menu-documentacion', {
  data() {
    return {
      href: location.href,
      host: DOMINIO,
      menu: [],
      menuVersion: {},
      versiones: [
        'v7.x',
        'v6.x',
        'v5.x',
        'v4.x',
        'v3.x',
        'v2.x',
        'v1.x'
      ]
    }
  },
  mounted() {
    this.asignarMenu('v7.x');
    this.asignarMenuVersion('v7.x');
  },
  methods: {
    asignarMenu(version) {
      this.menu = [
        { href: `${this.host}documentacion/_version_/instalacion/`, texto: 'Instalación' },
        { href: `${this.host}documentacion/_version_/configuracion/`, texto: 'Configuración' },
        { href: `${this.host}documentacion/_version_/convenciones/`, texto: 'Convenciones' },
        { href: `${this.host}documentacion/_version_/modelos-y-constructor-de-consultas/`, texto: 'Modelos y Constructor de Consultas' },
        { href: `${this.host}documentacion/_version_/insertar/`, texto: 'Insertar' },
        { href: `${this.host}documentacion/_version_/consultar/`, texto: 'Consultar' },
        { href: `${this.host}documentacion/_version_/actualizar/`, texto: 'Actualizar' },
        { href: `${this.host}documentacion/_version_/eliminar/`, texto: 'Eliminar' },
        { href: `${this.host}documentacion/_version_/vaciar-tabla/`, texto: 'Vaciar Tabla' },
        { href: `${this.host}documentacion/_version_/autenticar-usuarios/`, texto: 'Autenticar Usuarios' },
        { href: `${this.host}documentacion/_version_/migracion/`, texto: 'Migración' }
      ];

      version = this.obtenerVersionURL(version).substring(1, 4);

      this.menu.forEach((item) => {
        item.href = item.href.replace('_version_', version);
      });

      if (version.substring(0, 1) >= 4) {
        this.eliminarItemMenu('autenticar-usuarios');
      }

      if (version.substring(0, 1) < 7) {
        this.eliminarItemMenu('migracion');
      }
    },
    asignarMenuVersion(version) {
      version = this.obtenerVersionURL(version);
      this.eliminarVersion(version);
      this.menuVersion = {
        actual: version,
        versiones: this.versiones
      }
    },
    eliminarVersion(version) {
      let index = this.versiones.indexOf(version);

      if (index > -1) {
        this.versiones.splice(index, 1);
      }
    },
    obtenerVersionURL(predeterminado = null) {
      let version = predeterminado;
      let index = location.href.indexOf('.x');

      if (index > -1) {
        version = 'v' + location.href.substring(index - 1, index + 2);
      }

      return version;
    },
    eliminarItemMenu(itemMenu) {
      index = -1;

      this.menu.forEach((item, i) => {
        if (item.href.indexOf(itemMenu) > -1) {
          index = i;
        }
      });

      if (index > -1) {
        this.menu.splice(index, 1);
      }
    }
  },
  template: `
    <div class="menu-doc">
    <ul>
        <li><a style="cursor:pointer;">{{menuVersion.actual}} <i class="fa fa-angle-down"></i></a>
            <ul>
                <li v-for="(item, index) in menuVersion.versiones">
                    <a :href="host+'documentacion/'+item.substring(1, 4)">{{item}}</a>
                </li>
            </ul>
        </li>
    </ul>
    <div class="hr"></div>
    <template v-for="(item, index) in menu">
        <a :href="item.href" class="menu_link" :style="href==item.href ? 'color:#5BC800; font-weight:bold;' : ''">{{item.texto}}</a>
        <div class="hr"></div>
    </template>
    </div>
    `
});
