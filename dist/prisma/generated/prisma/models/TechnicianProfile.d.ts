import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model TechnicianProfile
 *
 */
export type TechnicianProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$TechnicianProfilePayload>;
export type AggregateTechnicianProfile = {
    _count: TechnicianProfileCountAggregateOutputType | null;
    _avg: TechnicianProfileAvgAggregateOutputType | null;
    _sum: TechnicianProfileSumAggregateOutputType | null;
    _min: TechnicianProfileMinAggregateOutputType | null;
    _max: TechnicianProfileMaxAggregateOutputType | null;
};
export type TechnicianProfileAvgAggregateOutputType = {
    experience_year: number | null;
    hourly_rate: number | null;
};
export type TechnicianProfileSumAggregateOutputType = {
    experience_year: number | null;
    hourly_rate: number | null;
};
export type TechnicianProfileMinAggregateOutputType = {
    id: string | null;
    bio: string | null;
    experience_year: number | null;
    hourly_rate: number | null;
    location: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
};
export type TechnicianProfileMaxAggregateOutputType = {
    id: string | null;
    bio: string | null;
    experience_year: number | null;
    hourly_rate: number | null;
    location: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
};
export type TechnicianProfileCountAggregateOutputType = {
    id: number;
    bio: number;
    experience_year: number;
    hourly_rate: number;
    location: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    _all: number;
};
export type TechnicianProfileAvgAggregateInputType = {
    experience_year?: true;
    hourly_rate?: true;
};
export type TechnicianProfileSumAggregateInputType = {
    experience_year?: true;
    hourly_rate?: true;
};
export type TechnicianProfileMinAggregateInputType = {
    id?: true;
    bio?: true;
    experience_year?: true;
    hourly_rate?: true;
    location?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
};
export type TechnicianProfileMaxAggregateInputType = {
    id?: true;
    bio?: true;
    experience_year?: true;
    hourly_rate?: true;
    location?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
};
export type TechnicianProfileCountAggregateInputType = {
    id?: true;
    bio?: true;
    experience_year?: true;
    hourly_rate?: true;
    location?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    _all?: true;
};
export type TechnicianProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicianProfile to aggregate.
     */
    where?: Prisma.TechnicianProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TechnicianProfiles to fetch.
     */
    orderBy?: Prisma.TechnicianProfileOrderByWithRelationInput | Prisma.TechnicianProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TechnicianProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TechnicianProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TechnicianProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TechnicianProfiles
    **/
    _count?: true | TechnicianProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TechnicianProfileAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TechnicianProfileSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TechnicianProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TechnicianProfileMaxAggregateInputType;
};
export type GetTechnicianProfileAggregateType<T extends TechnicianProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateTechnicianProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTechnicianProfile[P]> : Prisma.GetScalarType<T[P], AggregateTechnicianProfile[P]>;
};
export type TechnicianProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TechnicianProfileWhereInput;
    orderBy?: Prisma.TechnicianProfileOrderByWithAggregationInput | Prisma.TechnicianProfileOrderByWithAggregationInput[];
    by: Prisma.TechnicianProfileScalarFieldEnum[] | Prisma.TechnicianProfileScalarFieldEnum;
    having?: Prisma.TechnicianProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TechnicianProfileCountAggregateInputType | true;
    _avg?: TechnicianProfileAvgAggregateInputType;
    _sum?: TechnicianProfileSumAggregateInputType;
    _min?: TechnicianProfileMinAggregateInputType;
    _max?: TechnicianProfileMaxAggregateInputType;
};
export type TechnicianProfileGroupByOutputType = {
    id: string;
    bio: string;
    experience_year: number;
    hourly_rate: number;
    location: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    _count: TechnicianProfileCountAggregateOutputType | null;
    _avg: TechnicianProfileAvgAggregateOutputType | null;
    _sum: TechnicianProfileSumAggregateOutputType | null;
    _min: TechnicianProfileMinAggregateOutputType | null;
    _max: TechnicianProfileMaxAggregateOutputType | null;
};
export type GetTechnicianProfileGroupByPayload<T extends TechnicianProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TechnicianProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TechnicianProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TechnicianProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TechnicianProfileGroupByOutputType[P]>;
}>>;
export type TechnicianProfileWhereInput = {
    AND?: Prisma.TechnicianProfileWhereInput | Prisma.TechnicianProfileWhereInput[];
    OR?: Prisma.TechnicianProfileWhereInput[];
    NOT?: Prisma.TechnicianProfileWhereInput | Prisma.TechnicianProfileWhereInput[];
    id?: Prisma.StringFilter<"TechnicianProfile"> | string;
    bio?: Prisma.StringFilter<"TechnicianProfile"> | string;
    experience_year?: Prisma.IntFilter<"TechnicianProfile"> | number;
    hourly_rate?: Prisma.IntFilter<"TechnicianProfile"> | number;
    location?: Prisma.StringFilter<"TechnicianProfile"> | string;
    created_at?: Prisma.DateTimeFilter<"TechnicianProfile"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"TechnicianProfile"> | Date | string;
    user_id?: Prisma.StringFilter<"TechnicianProfile"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    service?: Prisma.ServiceListRelationFilter;
};
export type TechnicianProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    experience_year?: Prisma.SortOrder;
    hourly_rate?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    service?: Prisma.ServiceOrderByRelationAggregateInput;
};
export type TechnicianProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id?: string;
    AND?: Prisma.TechnicianProfileWhereInput | Prisma.TechnicianProfileWhereInput[];
    OR?: Prisma.TechnicianProfileWhereInput[];
    NOT?: Prisma.TechnicianProfileWhereInput | Prisma.TechnicianProfileWhereInput[];
    bio?: Prisma.StringFilter<"TechnicianProfile"> | string;
    experience_year?: Prisma.IntFilter<"TechnicianProfile"> | number;
    hourly_rate?: Prisma.IntFilter<"TechnicianProfile"> | number;
    location?: Prisma.StringFilter<"TechnicianProfile"> | string;
    created_at?: Prisma.DateTimeFilter<"TechnicianProfile"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"TechnicianProfile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    service?: Prisma.ServiceListRelationFilter;
}, "id" | "user_id">;
export type TechnicianProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    experience_year?: Prisma.SortOrder;
    hourly_rate?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    _count?: Prisma.TechnicianProfileCountOrderByAggregateInput;
    _avg?: Prisma.TechnicianProfileAvgOrderByAggregateInput;
    _max?: Prisma.TechnicianProfileMaxOrderByAggregateInput;
    _min?: Prisma.TechnicianProfileMinOrderByAggregateInput;
    _sum?: Prisma.TechnicianProfileSumOrderByAggregateInput;
};
export type TechnicianProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.TechnicianProfileScalarWhereWithAggregatesInput | Prisma.TechnicianProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.TechnicianProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TechnicianProfileScalarWhereWithAggregatesInput | Prisma.TechnicianProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TechnicianProfile"> | string;
    bio?: Prisma.StringWithAggregatesFilter<"TechnicianProfile"> | string;
    experience_year?: Prisma.IntWithAggregatesFilter<"TechnicianProfile"> | number;
    hourly_rate?: Prisma.IntWithAggregatesFilter<"TechnicianProfile"> | number;
    location?: Prisma.StringWithAggregatesFilter<"TechnicianProfile"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"TechnicianProfile"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"TechnicianProfile"> | Date | string;
    user_id?: Prisma.StringWithAggregatesFilter<"TechnicianProfile"> | string;
};
export type TechnicianProfileCreateInput = {
    id?: string;
    bio: string;
    experience_year: number;
    hourly_rate: number;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTechnician_profileInput;
    service?: Prisma.ServiceCreateNestedManyWithoutTechnicianInput;
};
export type TechnicianProfileUncheckedCreateInput = {
    id?: string;
    bio: string;
    experience_year: number;
    hourly_rate: number;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    service?: Prisma.ServiceUncheckedCreateNestedManyWithoutTechnicianInput;
};
export type TechnicianProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    experience_year?: Prisma.IntFieldUpdateOperationsInput | number;
    hourly_rate?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTechnician_profileNestedInput;
    service?: Prisma.ServiceUpdateManyWithoutTechnicianNestedInput;
};
export type TechnicianProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    experience_year?: Prisma.IntFieldUpdateOperationsInput | number;
    hourly_rate?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    service?: Prisma.ServiceUncheckedUpdateManyWithoutTechnicianNestedInput;
};
export type TechnicianProfileCreateManyInput = {
    id?: string;
    bio: string;
    experience_year: number;
    hourly_rate: number;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
};
export type TechnicianProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    experience_year?: Prisma.IntFieldUpdateOperationsInput | number;
    hourly_rate?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TechnicianProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    experience_year?: Prisma.IntFieldUpdateOperationsInput | number;
    hourly_rate?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TechnicianProfileScalarRelationFilter = {
    is?: Prisma.TechnicianProfileWhereInput;
    isNot?: Prisma.TechnicianProfileWhereInput;
};
export type TechnicianProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    experience_year?: Prisma.SortOrder;
    hourly_rate?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type TechnicianProfileAvgOrderByAggregateInput = {
    experience_year?: Prisma.SortOrder;
    hourly_rate?: Prisma.SortOrder;
};
export type TechnicianProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    experience_year?: Prisma.SortOrder;
    hourly_rate?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type TechnicianProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    experience_year?: Prisma.SortOrder;
    hourly_rate?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type TechnicianProfileSumOrderByAggregateInput = {
    experience_year?: Prisma.SortOrder;
    hourly_rate?: Prisma.SortOrder;
};
export type TechnicianProfileNullableScalarRelationFilter = {
    is?: Prisma.TechnicianProfileWhereInput | null;
    isNot?: Prisma.TechnicianProfileWhereInput | null;
};
export type TechnicianProfileCreateNestedOneWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.TechnicianProfileCreateWithoutServiceInput, Prisma.TechnicianProfileUncheckedCreateWithoutServiceInput>;
    connectOrCreate?: Prisma.TechnicianProfileCreateOrConnectWithoutServiceInput;
    connect?: Prisma.TechnicianProfileWhereUniqueInput;
};
export type TechnicianProfileUpdateOneRequiredWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.TechnicianProfileCreateWithoutServiceInput, Prisma.TechnicianProfileUncheckedCreateWithoutServiceInput>;
    connectOrCreate?: Prisma.TechnicianProfileCreateOrConnectWithoutServiceInput;
    upsert?: Prisma.TechnicianProfileUpsertWithoutServiceInput;
    connect?: Prisma.TechnicianProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TechnicianProfileUpdateToOneWithWhereWithoutServiceInput, Prisma.TechnicianProfileUpdateWithoutServiceInput>, Prisma.TechnicianProfileUncheckedUpdateWithoutServiceInput>;
};
export type TechnicianProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TechnicianProfileCreateWithoutUserInput, Prisma.TechnicianProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TechnicianProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.TechnicianProfileWhereUniqueInput;
};
export type TechnicianProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TechnicianProfileCreateWithoutUserInput, Prisma.TechnicianProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TechnicianProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.TechnicianProfileWhereUniqueInput;
};
export type TechnicianProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TechnicianProfileCreateWithoutUserInput, Prisma.TechnicianProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TechnicianProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.TechnicianProfileUpsertWithoutUserInput;
    disconnect?: Prisma.TechnicianProfileWhereInput | boolean;
    delete?: Prisma.TechnicianProfileWhereInput | boolean;
    connect?: Prisma.TechnicianProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TechnicianProfileUpdateToOneWithWhereWithoutUserInput, Prisma.TechnicianProfileUpdateWithoutUserInput>, Prisma.TechnicianProfileUncheckedUpdateWithoutUserInput>;
};
export type TechnicianProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TechnicianProfileCreateWithoutUserInput, Prisma.TechnicianProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TechnicianProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.TechnicianProfileUpsertWithoutUserInput;
    disconnect?: Prisma.TechnicianProfileWhereInput | boolean;
    delete?: Prisma.TechnicianProfileWhereInput | boolean;
    connect?: Prisma.TechnicianProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TechnicianProfileUpdateToOneWithWhereWithoutUserInput, Prisma.TechnicianProfileUpdateWithoutUserInput>, Prisma.TechnicianProfileUncheckedUpdateWithoutUserInput>;
};
export type TechnicianProfileCreateWithoutServiceInput = {
    id?: string;
    bio: string;
    experience_year: number;
    hourly_rate: number;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTechnician_profileInput;
};
export type TechnicianProfileUncheckedCreateWithoutServiceInput = {
    id?: string;
    bio: string;
    experience_year: number;
    hourly_rate: number;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
};
export type TechnicianProfileCreateOrConnectWithoutServiceInput = {
    where: Prisma.TechnicianProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.TechnicianProfileCreateWithoutServiceInput, Prisma.TechnicianProfileUncheckedCreateWithoutServiceInput>;
};
export type TechnicianProfileUpsertWithoutServiceInput = {
    update: Prisma.XOR<Prisma.TechnicianProfileUpdateWithoutServiceInput, Prisma.TechnicianProfileUncheckedUpdateWithoutServiceInput>;
    create: Prisma.XOR<Prisma.TechnicianProfileCreateWithoutServiceInput, Prisma.TechnicianProfileUncheckedCreateWithoutServiceInput>;
    where?: Prisma.TechnicianProfileWhereInput;
};
export type TechnicianProfileUpdateToOneWithWhereWithoutServiceInput = {
    where?: Prisma.TechnicianProfileWhereInput;
    data: Prisma.XOR<Prisma.TechnicianProfileUpdateWithoutServiceInput, Prisma.TechnicianProfileUncheckedUpdateWithoutServiceInput>;
};
export type TechnicianProfileUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    experience_year?: Prisma.IntFieldUpdateOperationsInput | number;
    hourly_rate?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTechnician_profileNestedInput;
};
export type TechnicianProfileUncheckedUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    experience_year?: Prisma.IntFieldUpdateOperationsInput | number;
    hourly_rate?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TechnicianProfileCreateWithoutUserInput = {
    id?: string;
    bio: string;
    experience_year: number;
    hourly_rate: number;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    service?: Prisma.ServiceCreateNestedManyWithoutTechnicianInput;
};
export type TechnicianProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    bio: string;
    experience_year: number;
    hourly_rate: number;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    service?: Prisma.ServiceUncheckedCreateNestedManyWithoutTechnicianInput;
};
export type TechnicianProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.TechnicianProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.TechnicianProfileCreateWithoutUserInput, Prisma.TechnicianProfileUncheckedCreateWithoutUserInput>;
};
export type TechnicianProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.TechnicianProfileUpdateWithoutUserInput, Prisma.TechnicianProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TechnicianProfileCreateWithoutUserInput, Prisma.TechnicianProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.TechnicianProfileWhereInput;
};
export type TechnicianProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.TechnicianProfileWhereInput;
    data: Prisma.XOR<Prisma.TechnicianProfileUpdateWithoutUserInput, Prisma.TechnicianProfileUncheckedUpdateWithoutUserInput>;
};
export type TechnicianProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    experience_year?: Prisma.IntFieldUpdateOperationsInput | number;
    hourly_rate?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    service?: Prisma.ServiceUpdateManyWithoutTechnicianNestedInput;
};
export type TechnicianProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    experience_year?: Prisma.IntFieldUpdateOperationsInput | number;
    hourly_rate?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    service?: Prisma.ServiceUncheckedUpdateManyWithoutTechnicianNestedInput;
};
/**
 * Count Type TechnicianProfileCountOutputType
 */
export type TechnicianProfileCountOutputType = {
    service: number;
};
export type TechnicianProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    service?: boolean | TechnicianProfileCountOutputTypeCountServiceArgs;
};
/**
 * TechnicianProfileCountOutputType without action
 */
export type TechnicianProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianProfileCountOutputType
     */
    select?: Prisma.TechnicianProfileCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TechnicianProfileCountOutputType without action
 */
export type TechnicianProfileCountOutputTypeCountServiceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
};
export type TechnicianProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bio?: boolean;
    experience_year?: boolean;
    hourly_rate?: boolean;
    location?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.TechnicianProfile$serviceArgs<ExtArgs>;
    _count?: boolean | Prisma.TechnicianProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["technicianProfile"]>;
export type TechnicianProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bio?: boolean;
    experience_year?: boolean;
    hourly_rate?: boolean;
    location?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["technicianProfile"]>;
export type TechnicianProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bio?: boolean;
    experience_year?: boolean;
    hourly_rate?: boolean;
    location?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["technicianProfile"]>;
export type TechnicianProfileSelectScalar = {
    id?: boolean;
    bio?: boolean;
    experience_year?: boolean;
    hourly_rate?: boolean;
    location?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
};
export type TechnicianProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bio" | "experience_year" | "hourly_rate" | "location" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["technicianProfile"]>;
export type TechnicianProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.TechnicianProfile$serviceArgs<ExtArgs>;
    _count?: boolean | Prisma.TechnicianProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TechnicianProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TechnicianProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TechnicianProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TechnicianProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        service: Prisma.$ServicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bio: string;
        experience_year: number;
        hourly_rate: number;
        location: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
    }, ExtArgs["result"]["technicianProfile"]>;
    composites: {};
};
export type TechnicianProfileGetPayload<S extends boolean | null | undefined | TechnicianProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TechnicianProfilePayload, S>;
export type TechnicianProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TechnicianProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TechnicianProfileCountAggregateInputType | true;
};
export interface TechnicianProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TechnicianProfile'];
        meta: {
            name: 'TechnicianProfile';
        };
    };
    /**
     * Find zero or one TechnicianProfile that matches the filter.
     * @param {TechnicianProfileFindUniqueArgs} args - Arguments to find a TechnicianProfile
     * @example
     * // Get one TechnicianProfile
     * const technicianProfile = await prisma.technicianProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnicianProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, TechnicianProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TechnicianProfileClient<runtime.Types.Result.GetResult<Prisma.$TechnicianProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TechnicianProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TechnicianProfileFindUniqueOrThrowArgs} args - Arguments to find a TechnicianProfile
     * @example
     * // Get one TechnicianProfile
     * const technicianProfile = await prisma.technicianProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnicianProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TechnicianProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TechnicianProfileClient<runtime.Types.Result.GetResult<Prisma.$TechnicianProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TechnicianProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianProfileFindFirstArgs} args - Arguments to find a TechnicianProfile
     * @example
     * // Get one TechnicianProfile
     * const technicianProfile = await prisma.technicianProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnicianProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, TechnicianProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__TechnicianProfileClient<runtime.Types.Result.GetResult<Prisma.$TechnicianProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TechnicianProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianProfileFindFirstOrThrowArgs} args - Arguments to find a TechnicianProfile
     * @example
     * // Get one TechnicianProfile
     * const technicianProfile = await prisma.technicianProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnicianProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TechnicianProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TechnicianProfileClient<runtime.Types.Result.GetResult<Prisma.$TechnicianProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TechnicianProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechnicianProfiles
     * const technicianProfiles = await prisma.technicianProfile.findMany()
     *
     * // Get first 10 TechnicianProfiles
     * const technicianProfiles = await prisma.technicianProfile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const technicianProfileWithIdOnly = await prisma.technicianProfile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TechnicianProfileFindManyArgs>(args?: Prisma.SelectSubset<T, TechnicianProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TechnicianProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TechnicianProfile.
     * @param {TechnicianProfileCreateArgs} args - Arguments to create a TechnicianProfile.
     * @example
     * // Create one TechnicianProfile
     * const TechnicianProfile = await prisma.technicianProfile.create({
     *   data: {
     *     // ... data to create a TechnicianProfile
     *   }
     * })
     *
     */
    create<T extends TechnicianProfileCreateArgs>(args: Prisma.SelectSubset<T, TechnicianProfileCreateArgs<ExtArgs>>): Prisma.Prisma__TechnicianProfileClient<runtime.Types.Result.GetResult<Prisma.$TechnicianProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TechnicianProfiles.
     * @param {TechnicianProfileCreateManyArgs} args - Arguments to create many TechnicianProfiles.
     * @example
     * // Create many TechnicianProfiles
     * const technicianProfile = await prisma.technicianProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TechnicianProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, TechnicianProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TechnicianProfiles and returns the data saved in the database.
     * @param {TechnicianProfileCreateManyAndReturnArgs} args - Arguments to create many TechnicianProfiles.
     * @example
     * // Create many TechnicianProfiles
     * const technicianProfile = await prisma.technicianProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TechnicianProfiles and only return the `id`
     * const technicianProfileWithIdOnly = await prisma.technicianProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TechnicianProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TechnicianProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TechnicianProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TechnicianProfile.
     * @param {TechnicianProfileDeleteArgs} args - Arguments to delete one TechnicianProfile.
     * @example
     * // Delete one TechnicianProfile
     * const TechnicianProfile = await prisma.technicianProfile.delete({
     *   where: {
     *     // ... filter to delete one TechnicianProfile
     *   }
     * })
     *
     */
    delete<T extends TechnicianProfileDeleteArgs>(args: Prisma.SelectSubset<T, TechnicianProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__TechnicianProfileClient<runtime.Types.Result.GetResult<Prisma.$TechnicianProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TechnicianProfile.
     * @param {TechnicianProfileUpdateArgs} args - Arguments to update one TechnicianProfile.
     * @example
     * // Update one TechnicianProfile
     * const technicianProfile = await prisma.technicianProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TechnicianProfileUpdateArgs>(args: Prisma.SelectSubset<T, TechnicianProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__TechnicianProfileClient<runtime.Types.Result.GetResult<Prisma.$TechnicianProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TechnicianProfiles.
     * @param {TechnicianProfileDeleteManyArgs} args - Arguments to filter TechnicianProfiles to delete.
     * @example
     * // Delete a few TechnicianProfiles
     * const { count } = await prisma.technicianProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TechnicianProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, TechnicianProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TechnicianProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechnicianProfiles
     * const technicianProfile = await prisma.technicianProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TechnicianProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, TechnicianProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TechnicianProfiles and returns the data updated in the database.
     * @param {TechnicianProfileUpdateManyAndReturnArgs} args - Arguments to update many TechnicianProfiles.
     * @example
     * // Update many TechnicianProfiles
     * const technicianProfile = await prisma.technicianProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TechnicianProfiles and only return the `id`
     * const technicianProfileWithIdOnly = await prisma.technicianProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TechnicianProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TechnicianProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TechnicianProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TechnicianProfile.
     * @param {TechnicianProfileUpsertArgs} args - Arguments to update or create a TechnicianProfile.
     * @example
     * // Update or create a TechnicianProfile
     * const technicianProfile = await prisma.technicianProfile.upsert({
     *   create: {
     *     // ... data to create a TechnicianProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechnicianProfile we want to update
     *   }
     * })
     */
    upsert<T extends TechnicianProfileUpsertArgs>(args: Prisma.SelectSubset<T, TechnicianProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__TechnicianProfileClient<runtime.Types.Result.GetResult<Prisma.$TechnicianProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TechnicianProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianProfileCountArgs} args - Arguments to filter TechnicianProfiles to count.
     * @example
     * // Count the number of TechnicianProfiles
     * const count = await prisma.technicianProfile.count({
     *   where: {
     *     // ... the filter for the TechnicianProfiles we want to count
     *   }
     * })
    **/
    count<T extends TechnicianProfileCountArgs>(args?: Prisma.Subset<T, TechnicianProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TechnicianProfileCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TechnicianProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechnicianProfileAggregateArgs>(args: Prisma.Subset<T, TechnicianProfileAggregateArgs>): Prisma.PrismaPromise<GetTechnicianProfileAggregateType<T>>;
    /**
     * Group by TechnicianProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends TechnicianProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TechnicianProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: TechnicianProfileGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TechnicianProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicianProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TechnicianProfile model
     */
    readonly fields: TechnicianProfileFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TechnicianProfile.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TechnicianProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    service<T extends Prisma.TechnicianProfile$serviceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TechnicianProfile$serviceArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the TechnicianProfile model
 */
export interface TechnicianProfileFieldRefs {
    readonly id: Prisma.FieldRef<"TechnicianProfile", 'String'>;
    readonly bio: Prisma.FieldRef<"TechnicianProfile", 'String'>;
    readonly experience_year: Prisma.FieldRef<"TechnicianProfile", 'Int'>;
    readonly hourly_rate: Prisma.FieldRef<"TechnicianProfile", 'Int'>;
    readonly location: Prisma.FieldRef<"TechnicianProfile", 'String'>;
    readonly created_at: Prisma.FieldRef<"TechnicianProfile", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"TechnicianProfile", 'DateTime'>;
    readonly user_id: Prisma.FieldRef<"TechnicianProfile", 'String'>;
}
/**
 * TechnicianProfile findUnique
 */
export type TechnicianProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianProfile
     */
    select?: Prisma.TechnicianProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TechnicianProfile
     */
    omit?: Prisma.TechnicianProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TechnicianProfileInclude<ExtArgs> | null;
    /**
     * Filter, which TechnicianProfile to fetch.
     */
    where: Prisma.TechnicianProfileWhereUniqueInput;
};
/**
 * TechnicianProfile findUniqueOrThrow
 */
export type TechnicianProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianProfile
     */
    select?: Prisma.TechnicianProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TechnicianProfile
     */
    omit?: Prisma.TechnicianProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TechnicianProfileInclude<ExtArgs> | null;
    /**
     * Filter, which TechnicianProfile to fetch.
     */
    where: Prisma.TechnicianProfileWhereUniqueInput;
};
/**
 * TechnicianProfile findFirst
 */
export type TechnicianProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianProfile
     */
    select?: Prisma.TechnicianProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TechnicianProfile
     */
    omit?: Prisma.TechnicianProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TechnicianProfileInclude<ExtArgs> | null;
    /**
     * Filter, which TechnicianProfile to fetch.
     */
    where?: Prisma.TechnicianProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TechnicianProfiles to fetch.
     */
    orderBy?: Prisma.TechnicianProfileOrderByWithRelationInput | Prisma.TechnicianProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TechnicianProfiles.
     */
    cursor?: Prisma.TechnicianProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TechnicianProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TechnicianProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TechnicianProfiles.
     */
    distinct?: Prisma.TechnicianProfileScalarFieldEnum | Prisma.TechnicianProfileScalarFieldEnum[];
};
/**
 * TechnicianProfile findFirstOrThrow
 */
export type TechnicianProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianProfile
     */
    select?: Prisma.TechnicianProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TechnicianProfile
     */
    omit?: Prisma.TechnicianProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TechnicianProfileInclude<ExtArgs> | null;
    /**
     * Filter, which TechnicianProfile to fetch.
     */
    where?: Prisma.TechnicianProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TechnicianProfiles to fetch.
     */
    orderBy?: Prisma.TechnicianProfileOrderByWithRelationInput | Prisma.TechnicianProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TechnicianProfiles.
     */
    cursor?: Prisma.TechnicianProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TechnicianProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TechnicianProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TechnicianProfiles.
     */
    distinct?: Prisma.TechnicianProfileScalarFieldEnum | Prisma.TechnicianProfileScalarFieldEnum[];
};
/**
 * TechnicianProfile findMany
 */
export type TechnicianProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianProfile
     */
    select?: Prisma.TechnicianProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TechnicianProfile
     */
    omit?: Prisma.TechnicianProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TechnicianProfileInclude<ExtArgs> | null;
    /**
     * Filter, which TechnicianProfiles to fetch.
     */
    where?: Prisma.TechnicianProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TechnicianProfiles to fetch.
     */
    orderBy?: Prisma.TechnicianProfileOrderByWithRelationInput | Prisma.TechnicianProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TechnicianProfiles.
     */
    cursor?: Prisma.TechnicianProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TechnicianProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TechnicianProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TechnicianProfiles.
     */
    distinct?: Prisma.TechnicianProfileScalarFieldEnum | Prisma.TechnicianProfileScalarFieldEnum[];
};
/**
 * TechnicianProfile create
 */
export type TechnicianProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianProfile
     */
    select?: Prisma.TechnicianProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TechnicianProfile
     */
    omit?: Prisma.TechnicianProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TechnicianProfileInclude<ExtArgs> | null;
    /**
     * The data needed to create a TechnicianProfile.
     */
    data: Prisma.XOR<Prisma.TechnicianProfileCreateInput, Prisma.TechnicianProfileUncheckedCreateInput>;
};
/**
 * TechnicianProfile createMany
 */
export type TechnicianProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TechnicianProfiles.
     */
    data: Prisma.TechnicianProfileCreateManyInput | Prisma.TechnicianProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TechnicianProfile createManyAndReturn
 */
export type TechnicianProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianProfile
     */
    select?: Prisma.TechnicianProfileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TechnicianProfile
     */
    omit?: Prisma.TechnicianProfileOmit<ExtArgs> | null;
    /**
     * The data used to create many TechnicianProfiles.
     */
    data: Prisma.TechnicianProfileCreateManyInput | Prisma.TechnicianProfileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TechnicianProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TechnicianProfile update
 */
export type TechnicianProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianProfile
     */
    select?: Prisma.TechnicianProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TechnicianProfile
     */
    omit?: Prisma.TechnicianProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TechnicianProfileInclude<ExtArgs> | null;
    /**
     * The data needed to update a TechnicianProfile.
     */
    data: Prisma.XOR<Prisma.TechnicianProfileUpdateInput, Prisma.TechnicianProfileUncheckedUpdateInput>;
    /**
     * Choose, which TechnicianProfile to update.
     */
    where: Prisma.TechnicianProfileWhereUniqueInput;
};
/**
 * TechnicianProfile updateMany
 */
export type TechnicianProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TechnicianProfiles.
     */
    data: Prisma.XOR<Prisma.TechnicianProfileUpdateManyMutationInput, Prisma.TechnicianProfileUncheckedUpdateManyInput>;
    /**
     * Filter which TechnicianProfiles to update
     */
    where?: Prisma.TechnicianProfileWhereInput;
    /**
     * Limit how many TechnicianProfiles to update.
     */
    limit?: number;
};
/**
 * TechnicianProfile updateManyAndReturn
 */
export type TechnicianProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianProfile
     */
    select?: Prisma.TechnicianProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TechnicianProfile
     */
    omit?: Prisma.TechnicianProfileOmit<ExtArgs> | null;
    /**
     * The data used to update TechnicianProfiles.
     */
    data: Prisma.XOR<Prisma.TechnicianProfileUpdateManyMutationInput, Prisma.TechnicianProfileUncheckedUpdateManyInput>;
    /**
     * Filter which TechnicianProfiles to update
     */
    where?: Prisma.TechnicianProfileWhereInput;
    /**
     * Limit how many TechnicianProfiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TechnicianProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TechnicianProfile upsert
 */
export type TechnicianProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianProfile
     */
    select?: Prisma.TechnicianProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TechnicianProfile
     */
    omit?: Prisma.TechnicianProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TechnicianProfileInclude<ExtArgs> | null;
    /**
     * The filter to search for the TechnicianProfile to update in case it exists.
     */
    where: Prisma.TechnicianProfileWhereUniqueInput;
    /**
     * In case the TechnicianProfile found by the `where` argument doesn't exist, create a new TechnicianProfile with this data.
     */
    create: Prisma.XOR<Prisma.TechnicianProfileCreateInput, Prisma.TechnicianProfileUncheckedCreateInput>;
    /**
     * In case the TechnicianProfile was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TechnicianProfileUpdateInput, Prisma.TechnicianProfileUncheckedUpdateInput>;
};
/**
 * TechnicianProfile delete
 */
export type TechnicianProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianProfile
     */
    select?: Prisma.TechnicianProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TechnicianProfile
     */
    omit?: Prisma.TechnicianProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TechnicianProfileInclude<ExtArgs> | null;
    /**
     * Filter which TechnicianProfile to delete.
     */
    where: Prisma.TechnicianProfileWhereUniqueInput;
};
/**
 * TechnicianProfile deleteMany
 */
export type TechnicianProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicianProfiles to delete
     */
    where?: Prisma.TechnicianProfileWhereInput;
    /**
     * Limit how many TechnicianProfiles to delete.
     */
    limit?: number;
};
/**
 * TechnicianProfile.service
 */
export type TechnicianProfile$serviceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
/**
 * TechnicianProfile without action
 */
export type TechnicianProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianProfile
     */
    select?: Prisma.TechnicianProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TechnicianProfile
     */
    omit?: Prisma.TechnicianProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TechnicianProfileInclude<ExtArgs> | null;
};
//# sourceMappingURL=TechnicianProfile.d.ts.map