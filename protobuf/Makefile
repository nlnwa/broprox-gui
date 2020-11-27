VEIDEMANN_API_VERSION?=scope
PROTOC_VERSION=3.13.0
PROTOC_FILE_VERSION=$$(echo ${PROTOC_VERSION} | sed -r 's|(.*)(rc)(.*)|\1-\2-\3|')
GRPC_WEB_VERSION=1.2.1

PROTOC=tools/bin/protoc
PROTOC_GEN_GRPC_WEB=tools/protoc-gen-grpc-web-${GRPC_WEB_VERSION}-linux-x86_64

GRPC_WEB_IMPORT_STYLE=commonjs+dts
OUT=../src/api/gen

.PHONY: all
.PHONY: clean
.PHONY: distclean

all:	tools veidemann-api build

clean:
	rm -rf protobuf include veidemann-api

distclean: clean
	rm -rf tools

tools:
	@mkdir -p tools \
	&& cd tools \
	&& wget -q https://github.com/google/protobuf/releases/download/v${PROTOC_VERSION}/protoc-${PROTOC_FILE_VERSION}-linux-x86_64.zip \
	&& unzip -qq protoc-${PROTOC_FILE_VERSION}-linux-x86_64.zip \
	&& rm protoc-${PROTOC_FILE_VERSION}-linux-x86_64.zip \
	&& wget -q https://github.com/grpc/grpc-web/releases/download/${GRPC_WEB_VERSION}/protoc-gen-grpc-web-${GRPC_WEB_VERSION}-linux-x86_64 \
	&& chmod +x protoc-gen-grpc-web-${GRPC_WEB_VERSION}-linux-x86_64

build: veidemann-api
	@rm -rf ${OUT}; mkdir -p ${OUT}
	@find veidemann-api/protobuf/{config,commons,controller,eventhandler,frontier,report} -name *.proto -exec ${PROTOC} \
	  -Iveidemann-api/protobuf \
	  -Itools/include \
	  --plugin=protoc-gen-grpc-web=${PROTOC_GEN_GRPC_WEB} \
	  --js_out=import_style=commonjs:${OUT} \
	  --grpc-web_out=import_style=${GRPC_WEB_IMPORT_STYLE},mode=grpcwebtext:${OUT} \
	  {} ';'
	@tree ${OUT}

veidemann-api: tools
	@git clone --depth=1 --quiet --branch ${VEIDEMANN_API_VERSION} git@github.com:nlnwa/veidemann-api.git

