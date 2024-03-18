import * as express from "express";
import { inject } from "inversify";
import { OrderService } from "../../services/shop/order.service";
import { controller, httpGet, httpPost, httpPut } from "inversify-express-utils";

@controller("/order")
export class OrderController {
    private readonly orderService: OrderService;

    public constructor(@inject(OrderService) orderService: OrderService) {
        this.orderService = orderService;
    }

    @httpPost("/create-order")
    public async createOrder(
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ): Promise<void> {
        try {
            const order = await this.orderService.createOrder(request.body);
            response.status(201).json(order);
        } catch (error) {
            next(error);
        }
    }

    @httpGet("/:userId")
    public async getOrderByUserId(
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ): Promise<void> {
        const id = request.query.id as string;
        try {
            const order = await this.orderService.getOrder(id);
            response.json(order);
        } catch (error) {
            next(error);
        }
    }

    @httpPut("/update-order/:id")
    public async updateOrder(
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ): Promise<void> {
        try {
            const id = request.params.id as string;
            const data = request.body;
            const order = await this.orderService.updateOrder(id, data);
            response.json(order);
        } catch (error) {
            next(error);
        }
    }

    @httpPut("/update-order-status/:id")
    public async updateOrderStatus(
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ): Promise<void> {
        try {
            const id = request.params.id as string;
            const status = request.body.status;
            const order = await this.orderService.updateOrderStatus(id, status);
            response.json(order);
        } catch (error) {
            next(error);
        }
    }
}
