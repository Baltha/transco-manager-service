const path           = require('path');
const transco        = require('toto-transcoder');
const defaultPresets = require('../../config/presets.json');

const defaultHosts = Object.keys(process.env)
                           .filter((key) => /^TRANSCO_HOST_.*$/i.test(key))
                           .map((key) => {
                             return { 
                               name: key.match(/^TRANSCO_HOST_(.*)$/i)[1].toLowerCase(),
                               value: process.env[key]
                             };
                           })
                           .sort((first, second) => {
                             if (second.name === 'default') {
                               return -1;
                             }
                             return 1;
                           });

const defaultExtensions = 
  (process.env.EXTENSIONS_ALLOWED || 'avi,mkv,mp4,mov,mpg,mpeg')
    .split(',')
    .map((item) => item.trim().toLowerCase());

class Manager {
  constructor({ hosts, extensions, storage, presets }) {
    this.extensions = extensions;
    this.storage    = storage;
    this.presets    = presets;
    this.hosts      = hosts;
  }

  /**
   * If wa can process this media type
   * @param {String} file
   * @return {Boolean}
   */
  canProcess(file) {
    const ext = path.extname(file);
    return this.extensions.includes(ext.toLowerCase());
  }

  findTranscoder(preset) {
    return new Promise((resolve, reject) => {
      
    });
  }

  process(file) {
    const filepath = path.join(this.storage, file);
    return transco
      .media(filepath)
      .then((media) => {
        const presets = media.configurePresets(this.presets);
      });
  }
}

const inst = new Manager({ 
  hosts: defaultHosts, 
  extensions: defaultExtensions,
  storage: process.env.STORAGE_PATH,
  presets: defaultPresets
});

inst.create = function(config) {
  return new Manager(config);
};

module.exports = inst;