.PHONY: server
server:
	yarn --cwd ./server start 

.PHONY: mobile
mobile:
	yarn --cwd ./mobile start 

.PHONY: mongo
mongo:
	docker-compose up -d

.PHONY: start
start: yarn.lock
	$(MAKE) mongo & $(MAKE) server

.PHONY: stop
stop:
	docker-compose down

.PHONY: check
check:
	yarn --cwd ./server run check && \
	yarn --cwd ./mobile run check && \
	yarn format && \
	yarn lint

yarn.lock: package.json */package.json
	yarn --no-progress --silent
