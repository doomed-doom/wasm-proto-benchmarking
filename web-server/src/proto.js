/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const main = $root.main = (() => {

    /**
     * Namespace main.
     * @exports main
     * @namespace
     */
    const main = {};

    main.Item = (function() {

        /**
         * Properties of an Item.
         * @memberof main
         * @interface IItem
         * @property {number|null} [id] Item id
         * @property {string|null} [name] Item name
         * @property {Array.<number>|null} [values] Item values
         */

        /**
         * Constructs a new Item.
         * @memberof main
         * @classdesc Represents an Item.
         * @implements IItem
         * @constructor
         * @param {main.IItem=} [properties] Properties to set
         */
        function Item(properties) {
            this.values = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Item id.
         * @member {number} id
         * @memberof main.Item
         * @instance
         */
        Item.prototype.id = 0;

        /**
         * Item name.
         * @member {string} name
         * @memberof main.Item
         * @instance
         */
        Item.prototype.name = "";

        /**
         * Item values.
         * @member {Array.<number>} values
         * @memberof main.Item
         * @instance
         */
        Item.prototype.values = $util.emptyArray;

        /**
         * Creates a new Item instance using the specified properties.
         * @function create
         * @memberof main.Item
         * @static
         * @param {main.IItem=} [properties] Properties to set
         * @returns {main.Item} Item instance
         */
        Item.create = function create(properties) {
            return new Item(properties);
        };

        /**
         * Encodes the specified Item message. Does not implicitly {@link main.Item.verify|verify} messages.
         * @function encode
         * @memberof main.Item
         * @static
         * @param {main.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.values != null && message.values.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.values.length; ++i)
                    writer.float(message.values[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link main.Item.verify|verify} messages.
         * @function encodeDelimited
         * @memberof main.Item
         * @static
         * @param {main.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @function decode
         * @memberof main.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {main.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.Item();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.values && message.values.length))
                            message.values = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.values.push(reader.float());
                        } else
                            message.values.push(reader.float());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof main.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {main.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Item message.
         * @function verify
         * @memberof main.Item
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Item.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                    return "values: array expected";
                for (let i = 0; i < message.values.length; ++i)
                    if (typeof message.values[i] !== "number")
                        return "values: number[] expected";
            }
            return null;
        };

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof main.Item
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {main.Item} Item
         */
        Item.fromObject = function fromObject(object) {
            if (object instanceof $root.main.Item)
                return object;
            let message = new $root.main.Item();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".main.Item.values: array expected");
                message.values = [];
                for (let i = 0; i < object.values.length; ++i)
                    message.values[i] = Number(object.values[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @function toObject
         * @memberof main.Item
         * @static
         * @param {main.Item} message Item
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Item.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.values && message.values.length) {
                object.values = [];
                for (let j = 0; j < message.values.length; ++j)
                    object.values[j] = options.json && !isFinite(message.values[j]) ? String(message.values[j]) : message.values[j];
            }
            return object;
        };

        /**
         * Converts this Item to JSON.
         * @function toJSON
         * @memberof main.Item
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Item.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Item
         * @function getTypeUrl
         * @memberof main.Item
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Item.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/main.Item";
        };

        return Item;
    })();

    main.Payload = (function() {

        /**
         * Properties of a Payload.
         * @memberof main
         * @interface IPayload
         * @property {Array.<main.IItem>|null} [items] Payload items
         */

        /**
         * Constructs a new Payload.
         * @memberof main
         * @classdesc Represents a Payload.
         * @implements IPayload
         * @constructor
         * @param {main.IPayload=} [properties] Properties to set
         */
        function Payload(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Payload items.
         * @member {Array.<main.IItem>} items
         * @memberof main.Payload
         * @instance
         */
        Payload.prototype.items = $util.emptyArray;

        /**
         * Creates a new Payload instance using the specified properties.
         * @function create
         * @memberof main.Payload
         * @static
         * @param {main.IPayload=} [properties] Properties to set
         * @returns {main.Payload} Payload instance
         */
        Payload.create = function create(properties) {
            return new Payload(properties);
        };

        /**
         * Encodes the specified Payload message. Does not implicitly {@link main.Payload.verify|verify} messages.
         * @function encode
         * @memberof main.Payload
         * @static
         * @param {main.IPayload} message Payload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Payload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.main.Item.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Payload message, length delimited. Does not implicitly {@link main.Payload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof main.Payload
         * @static
         * @param {main.IPayload} message Payload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Payload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Payload message from the specified reader or buffer.
         * @function decode
         * @memberof main.Payload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {main.Payload} Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Payload.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.Payload();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.main.Item.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Payload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof main.Payload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {main.Payload} Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Payload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Payload message.
         * @function verify
         * @memberof main.Payload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Payload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.main.Item.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Payload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof main.Payload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {main.Payload} Payload
         */
        Payload.fromObject = function fromObject(object) {
            if (object instanceof $root.main.Payload)
                return object;
            let message = new $root.main.Payload();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".main.Payload.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".main.Payload.items: object expected");
                    message.items[i] = $root.main.Item.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Payload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof main.Payload
         * @static
         * @param {main.Payload} message Payload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Payload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.main.Item.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this Payload to JSON.
         * @function toJSON
         * @memberof main.Payload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Payload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Payload
         * @function getTypeUrl
         * @memberof main.Payload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Payload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/main.Payload";
        };

        return Payload;
    })();

    return main;
})();

export { $root as default };
